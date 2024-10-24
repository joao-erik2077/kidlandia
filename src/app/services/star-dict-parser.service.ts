import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as pako from 'pako';

interface IndexEntry {
  word: string;
  offset: number;
  size: number;
}

interface Suggestion {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
}

@Injectable({
  providedIn: 'root',
})
export class StarDictParserService {
  private ifo: Record<string, string> = {};
  private idx: IndexEntry[] = [];
  private dictData: ArrayBuffer | null = null;

  constructor(private http: HttpClient) { }

  // Helper to fetch files from the assets folder
  private fetchFile(filePath: string, responseType: any): Observable<any> {
    return this.http.get(`assets/dictionary/${filePath}`, { responseType });
  }

  // Read the .ifo file from assets
  async readIfo(fileName: string): Promise<void> {
    const ifoContent = await this.fetchFile(`${fileName}.ifo`, 'text').toPromise();
    const lines = ifoContent.split('\n');
    lines.forEach((line: any) => {
      const [key, value] = line.split('=');
      if (key && value) {
        this.ifo[key.trim()] = value.trim();
      }
    });
  }

  // Parse the .idx file
  async readIdx(fileName: string): Promise<void> {
    const idxData = await this.fetchFile(`${fileName}.idx`, 'arraybuffer').toPromise();
    const idxBuffer = idxData as ArrayBuffer;
    const dataView = new DataView(idxBuffer);

    let offset = 0;
    while (offset < idxBuffer.byteLength) {
      let word = '';
      while (dataView.getUint8(offset) !== 0) {
        word += String.fromCharCode(dataView.getUint8(offset));
        offset++;
      }
      offset++; // Skip the null byte

      const wordOffset = dataView.getUint32(offset, false); // Big-endian
      const wordSize = dataView.getUint32(offset + 4, false); // Big-endian
      offset += 8;

      this.idx.push({ word, offset: wordOffset, size: wordSize });
    }
  }

  // Read the .dict or .dict.dz file
  async readDict(fileName: string): Promise<void> {
    const dictData = await this.fetchFile(`${fileName}.dict.dz`, 'arraybuffer').toPromise();
    const compressedData = dictData as ArrayBuffer;
    this.dictData = pako.ungzip(new Uint8Array(compressedData)).buffer;
  }

  // Get the definition for a specific word
  getDefinition(word: string): string {
    if (!this.dictData) {
      throw new Error('Dictionary data not loaded.');
    }

    const entry = this.idx.find((entry) => entry.word === word);
    if (!entry) {
      return '';
    }

    const definitionBuffer = this.dictData.slice(entry.offset, entry.offset + entry.size);
    return new TextDecoder('utf-8').decode(definitionBuffer);
  }

  // Function to get the top N matches based on the input query
  getTopMatches(query: string, limit: number = 10): Suggestion[] {
    const matches = this.idx
      .filter(entry => entry.word.startsWith(query))
      .slice(0, limit)
      .map(entry => {
        const definitionData = this.getDefinitionData(entry.word);
        return {
          word: entry.word,
          pronunciation: definitionData.pronunciation || 'N/A',
          partOfSpeech: definitionData.partOfSpeech || 'N/A',
        };
      });

    return matches;
  }

  getDefinitionData(word: string): { pronunciation: string; partOfSpeech: string } {
    if (!this.dictData) return { pronunciation: '', partOfSpeech: '' };

    // Logic to extract pronunciation and part of speech from dictData
    const definition: any = this.getDefinition(word);

    // Assume we have a way to extract pronunciation and part of speech from the definition
    const pronunciationMatch = definition.match(/<font color="gray">(.*?)<\/font>/);
    const partOfSpeechMatch = definition.match(/<font color="green">(.*?)<\/font>/);

    return {
      pronunciation: pronunciationMatch ? pronunciationMatch[1] : '',
      partOfSpeech: partOfSpeechMatch ? partOfSpeechMatch[1] : '',
    };
  }


  // Run the parser (initialize)
  async init(fileName: string): Promise<void> {
    await this.readIfo(fileName);
    await this.readIdx(fileName);
    await this.readDict(fileName);
  }
}
