import { TextToSpeechService } from './../../services/text-to-speech.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Speech } from 'src/app/models/Story';
import { narrator } from 'src/app/models/characters';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ChatComponent {

  @Input()
  speech?: Speech;

  narrator = narrator;

  constructor(public textToSpeechService: TextToSpeechService) { }

}
