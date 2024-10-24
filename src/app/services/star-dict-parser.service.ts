import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as pako from 'pako';

interface IndexEntry {
  word: string;
  offset: number;
  size: number;
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
  getDefinition(word: string): string | null {
    if (!this.dictData) {
      throw new Error('Dictionary data not loaded.');
    }

    const entry = this.idx.find((entry) => entry.word === word);
    if (!entry) {
      return null;
    }

    const definitionBuffer = this.dictData.slice(entry.offset, entry.offset + entry.size);
    return new TextDecoder('utf-8').decode(definitionBuffer);
  }

  // Run the parser (initialize)
  async init(fileName: string): Promise<void> {
    await this.readIfo(fileName);
    await this.readIdx(fileName);
    await this.readDict(fileName);
  }
}
