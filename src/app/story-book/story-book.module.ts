import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoryBookPageRoutingModule } from './story-book-routing.module';

import { StoryBookPage } from './story-book.page';
import { HeaderComponent } from '../components/header/header.component';
import { ChatComponent } from '../components/chat/chat.component';
import { QuestionComponent } from '../components/question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoryBookPageRoutingModule,
    HeaderComponent,
    ChatComponent,
    QuestionComponent
  ],
  declarations: [StoryBookPage]
})
export class StoryBookPageModule { }
