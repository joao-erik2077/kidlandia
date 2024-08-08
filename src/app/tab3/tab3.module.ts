import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    HeaderComponent,
    SearchbarComponent
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
