import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongratulationsPageRoutingModule } from './congratulations-routing.module';

import { CongratulationsPage } from './congratulations.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongratulationsPageRoutingModule,
    HeaderComponent
  ],
  declarations: [CongratulationsPage]
})
export class CongratulationsPageModule { }
