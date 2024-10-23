import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'story-book',
    loadChildren: () => import('./story-book/story-book.module').then( m => m.StoryBookPageModule)
  },
  {
    path: 'congratulations',
    loadChildren: () => import('./congratulations/congratulations.module').then( m => m.CongratulationsPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
