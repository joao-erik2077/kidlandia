import { Injectable } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  constructor() { }

  async speak(text: string, voiceIndex: number, lang: string = 'en-US') {
    console.log(text, voiceIndex)
    await TextToSpeech.speak({
      text: text,
      lang: lang,
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient',
      voice: voiceIndex,
    });
  }

  async stop() {
    await TextToSpeech.stop();
  }
}
