import { Component, OnInit } from '@angular/core';
import { Speech, Story } from '../models/Story';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story-book',
  templateUrl: './story-book.page.html',
  styleUrls: ['./story-book.page.scss'],
})
export class StoryBookPage implements OnInit {
  public currentStory!: Story;
  public shownSpeechs: Speech[] = [];
  public showHeader = true;
  public storyHasStarted = false;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.currentStory = this.storyService.getCurrentStory();
    this.showHeader = false;
    this.storyHasStarted = false;
    console.log(this.currentStory);
  }

  startStory() {
    this.showHeader = true;
    this.storyHasStarted = true;
    this.shownSpeechs.push(this.currentStory.speechs[0]);
  }

  continueStory() {
    this.shownSpeechs.push(this.currentStory.speechs[this.shownSpeechs.length]);
  }
}
