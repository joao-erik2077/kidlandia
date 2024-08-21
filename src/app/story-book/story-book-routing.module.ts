import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryBookPage } from './story-book.page';

const routes: Routes = [
  {
    path: '',
    component: StoryBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryBookPageRoutingModule {}
