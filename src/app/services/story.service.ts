import { Injectable } from '@angular/core';
import { Story } from '../models/IStory';
import { iWantADog } from '../models/stories';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private currentStory: Story = iWantADog;
  private currentPage: number = 0;

  constructor() { }

  public saveCurrentStory(story: Story) {
    this.currentStory = story;
  }

  public getCurrentStory(): Story {
    return this.currentStory;
  }
}
