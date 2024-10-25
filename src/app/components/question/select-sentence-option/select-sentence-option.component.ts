import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { QuestionOption } from 'src/app/models/IStory';

@Component({
  selector: 'app-select-sentence-option',
  templateUrl: './select-sentence-option.component.html',
  styleUrls: ['./select-sentence-option.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SelectSentenceOptionComponent implements OnInit {
  @Input()
  option!: QuestionOption;

  @Output()
  correctOptionClick = new EventEmitter();

  @Input()
  disabled = false;

  clicked = false;

  constructor() { }

  ngOnInit() { }

  resolveOption() {
    console.log(this.option);
    this.clicked = true;
    if (!this.option.valid) return;
    this.correctOptionClick.emit(this.option);
  }
}
