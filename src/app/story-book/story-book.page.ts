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
  public currentQuestion?: Question;

  @ViewChild(IonContent)
  content!: IonContent;

  constructor(private storyService: StoryService, private router: Router) {

  }

  ngOnInit() {
    this.currentStory = this.storyService.getCurrentStory();
    this.storyHasStarted = false;
    this.shownSpeechs = [];
    this.maxSpeechs = this.currentStory.speechs.length;
    console.log(this.currentStory);
  }

  startStory() {
    this.storyHasStarted = true;
    this.shownSpeechs.push(this.currentStory.speechs[0]);
  }

  continueStory(skipQuestion = false) {
    if (!skipQuestion && this.shownSpeechs[this.shownSpeechs.length - 1].question !== undefined) {
      this.content.scrollToBottom(500);

      return this.startQuestion(this.shownSpeechs[this.shownSpeechs.length - 1]);
    }
    this.shownSpeechs.push(this.currentStory.speechs[this.shownSpeechs.length]);

    this.content.scrollToBottom(500);
  }

  startQuestion(speech: Speech) {
    this.isDoingQuestion = true;
    this.currentQuestion = speech.question;
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
    this.maxSpeechs = this.currentStory.speechs.length;
    this.router.navigateByUrl('/tabs/tab2');
  }
}
