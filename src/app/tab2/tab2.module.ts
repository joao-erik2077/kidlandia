import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { StoryComponent } from '../components/story/story.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    HeaderComponent,
    StoryComponent,
    SearchbarComponent
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
