import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoryBookPageRoutingModule } from './story-book-routing.module';

import { StoryBookPage } from './story-book.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoryBookPageRoutingModule,
    HeaderComponent
  ],
  declarations: [StoryBookPage]
})
export class StoryBookPageModule {}
