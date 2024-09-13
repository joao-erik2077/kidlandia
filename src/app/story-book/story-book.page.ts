import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Question, QuestionOption, Speech, Story } from '../models/Story';
import { StoryService } from '../services/story.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-story-book',
  templateUrl: './story-book.page.html',
  styleUrls: ['./story-book.page.scss'],
})
export class StoryBookPage implements OnInit {
  public currentStory!: Story;
  public shownSpeechs: Speech[] = [];
  public maxSpeechs!: number;
  public storyHasStarted = false;
  public isDoingQuestion = false;
  //public currentQuestion?: Question;

  public storyLine: { type: 'speech' | 'question', question?: Question, speech?: Speech }[] = [];
  public storyFinished = false;

  @ViewChild(IonContent)
  content!: IonContent;

  constructor(private storyService: StoryService, private router: Router) {

  }

  ngOnInit() {
    this.currentStory = this.storyService.getCurrentStory();
    this.storyHasStarted = false;
    this.shownSpeechs = [];
    this.storyLine = [];
    this.maxSpeechs = this.currentStory.speechs.length;
    console.log(this.currentStory);
  }

  startStory() {
    this.storyHasStarted = true;
    this.shownSpeechs.push(this.currentStory.speechs[0]);
    this.storyLine.push({ type: 'speech', speech: this.currentStory.speechs[0] });
  }

  continueStory(skipQuestion = false) {
    console.log('b' + this.maxSpeechs, this.shownSpeechs.length)
    if (!skipQuestion && this.shownSpeechs[this.shownSpeechs.length - 1].question !== undefined) {
      this.content.scrollToBottom(500);

      return this.startQuestion(this.shownSpeechs[this.shownSpeechs.length - 1]);
    }
    this.shownSpeechs.push(this.currentStory.speechs[this.shownSpeechs.length]);
    this.storyLine.push({ type: 'speech', speech: this.currentStory.speechs[this.shownSpeechs.length] });
    console.log('f' + this.maxSpeechs, this.shownSpeechs.length)
    if (this.maxSpeechs === (this.shownSpeechs.length + 1)) this.storyFinished = true;

    this.content.scrollToBottom(500);
  }

  startQuestion(speech: Speech) {
    this.isDoingQuestion = true;
    //this.currentQuestion = speech.question;
    this.storyLine.push({ type: 'question', question: speech.question });
  }

  resolveQuestion(questionOption: QuestionOption) {
    console.log(`Story Book component: ${questionOption}`);
    if (questionOption.valid) {
      this.isDoingQuestion = false;
      this.continueStory(true);
    }
  }

  exit() {
    this.storyHasStarted = false;
    this.shownSpeechs = [];
    this.storyLine = [];
    this.maxSpeechs = this.currentStory.speechs.length;
    this.router.navigateByUrl('/tabs/tab2');
  }
}
