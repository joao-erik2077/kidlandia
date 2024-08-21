import { Injectable } from '@angular/core';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private currentStory: Story = {
    title: 'At the mountain',
    number_of_chapters: 2,
    description: 'Juan and Antonio decide to explore a mountain in the region',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/025/297/419/small_2x/mushroom-ai-generated-transparent-background-mushroom-house-t-shirt-design-png.png',
    pages: [
      {
        index: 0,
        phrases: [
          {
            name: 'Juan',
            message: 'bites the dust',
          },
          {
            name: 'Juan (crouching)',
            message: 'another one',
          },
          {
            name: 'Antonio',
            message: 'omg!',
          },
        ],
        hasNext: true,
        hasPrevious: false,
      },
      {
        index: 1,
        phrases: [
          {
            name: 'Juan',
            message: 'another one bites the dust',
          },
          {
            name: 'Juan (whispering)',
            message: 'beat it',
          },
          {
            name: 'Antonio',
            message: 'ok',
          },
        ],
        hasNext: true,
        hasPrevious: true,
      },
      {
        index: 2,
        phrases: [
          {
            name: 'Juan',
            message: 'really another one bites the dust',
          },
          {
            name: 'Antonio',
            message: 'ok boomer',
          },
        ],
        hasNext: false,
        hasPrevious: true,
      },
    ],
  };
  private currentPage: number = 0;

  constructor() {}

  public saveCurrentStory(story: Story) {
    this.currentStory = story;
  }

  public getCurrentStory(): Story {
    return this.currentStory;
  }
}
