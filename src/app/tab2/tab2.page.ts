import { Component } from '@angular/core';
import { Story } from '../components/story/story';

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
    },
    {
      title: 'At the river',
      number_of_chapters: 2,
      description: 'Juan and Antonio decide to explore a river in the region',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/025/297/419/small_2x/mushroom-ai-generated-transparent-background-mushroom-house-t-shirt-design-png.png',
    },
  ];

  constructor() {}

}
