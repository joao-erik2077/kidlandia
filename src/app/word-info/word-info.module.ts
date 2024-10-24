import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordInfoPageRoutingModule } from './word-info-routing.module';

import { WordInfoPage } from './word-info.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordInfoPageRoutingModule,
    HeaderComponent
  ],
  declarations: [WordInfoPage]
})
export class WordInfoPageModule { }
