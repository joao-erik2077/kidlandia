import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Question, QuestionOption } from 'src/app/models/IStory';
import { SelectTextOptionComponent } from "./select-text-option/select-text-option.component";
import { MultipleChoiceOptionComponent } from './multiple-choice-option/multiple-choice-option.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    SelectTextOptionComponent,
    MultipleChoiceOptionComponent
  ]
})
export class QuestionComponent implements OnInit {

  @Input()
  question?: Question;

  @Output()
  correctOptionClicked = new EventEmitter();

  questionOptionCorrect?: QuestionOption;

  questionFinished = false;

  finished = false;

  constructor() { }

  ngOnInit() {
    console.log(this.question);
  }

  correctOptionClick(event: QuestionOption) {
    console.log(`Question component: ${event}`);
    this.questionOptionCorrect = event;
    this.questionFinished = true;
  }

  continue() {
    this.finished = true;
    this.correctOptionClicked.emit(this.questionOptionCorrect);
  }

}
