import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordInfoService {
  private word!: { word: string; pronunciation: string; partOfSpeech: string };
  constructor() { }

  public setWord(word: { word: string; pronunciation: string; partOfSpeech: string }) {
    this.word = word;
  }

  public getWord(): { word: string; pronunciation: string; partOfSpeech: string } {
    return this.word;
  }
}
