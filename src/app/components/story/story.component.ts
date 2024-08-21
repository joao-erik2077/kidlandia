import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../models/story';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class StoryComponent  implements OnInit {

  @Input()
  public story!: Story;

  public episodes_text = 'episódios';

  constructor() { }

  ngOnInit() {}

}
