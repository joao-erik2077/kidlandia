import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';
import { StoryService } from '../services/story.service';
import { Page } from '../models/page';

@Component({
  selector: 'app-story-book',
  templateUrl: './story-book.page.html',
  styleUrls: ['./story-book.page.scss'],
})
export class StoryBookPage implements OnInit {
  public currentStory!: Story;
  public currentPage!: Page;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.currentStory = this.storyService.getCurrentStory();
    this.currentPage = this.currentStory.pages[0];
  }

  goNextPage() {
    this.currentPage = this.currentStory.pages[this.currentPage.index+1];
  }

  goPreviousPage() {
    this.currentPage = this.currentStory.pages[this.currentPage.index-1];
  }

}
