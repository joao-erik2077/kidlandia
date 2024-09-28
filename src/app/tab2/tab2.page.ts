import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from '../services/story.service';
import { doctorEddy, iWantADog, theNewStudent } from '../models/stories';
import { Story } from '../models/IStory';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public stories: Story[] = [iWantADog, theNewStudent, doctorEddy];

  constructor(private router: Router, private storyService: StoryService) { }

  startStory(story: Story) {
    this.storyService.saveCurrentStory(story);
    this.router.navigateByUrl('/story-book');
  }
}
