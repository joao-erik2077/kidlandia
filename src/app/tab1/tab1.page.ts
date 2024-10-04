import { TextToSpeechService } from './../services/text-to-speech.service';
import { Component } from '@angular/core';
import { Character } from '../models/Character';
import { beeSmith, enzoSilva, maribelPerez, moonbimChin } from '../models/characters';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public characters: Character[] = [beeSmith, moonbimChin, maribelPerez, enzoSilva];
  public text: string = '';

  constructor(public textToSpeechService: TextToSpeechService) { }

  speak(text: string, voiceIndex: number) {
    this.textToSpeechService.speak(text, voiceIndex);
  }
}
