import { Component } from '@angular/core';
import { Story } from '../models/story';
import { Router } from '@angular/router';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public stories: Story[] = [
    {
      title: 'At the mountain',
      number_of_chapters: 2,
      description: 'Juan and Antonio decide to explore a mountain in the region',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/025/297/419/small_2x/mushroom-ai-generated-transparent-background-mushroom-house-t-shirt-design-png.png',
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
        }
      ]
    },
    {
      title: 'At the river',
      number_of_chapters: 2,
      description: 'Juan and Antonio decide to explore a river in the region',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/025/297/419/small_2x/mushroom-ai-generated-transparent-background-mushroom-house-t-shirt-design-png.png',
      pages: [
        {
          index: 0,
          phrases: [
            {
              name: 'Joao',
              message: 'bites the dust',
            },
            {
              name: 'Joao (crouching)',
              message: 'another one',
            },
            {
              name: 'Tonho',
              message: 'gmo!',
            },
          ],
          hasNext: false,
          hasPrevious: false,
        }
      ]
    },
  ];

  constructor(private router: Router, private storyService: StoryService) {}

  startStory(story: Story) {
    this.storyService.saveCurrentStory(story);
    this.router.navigateByUrl('/story-book');
  }

}
