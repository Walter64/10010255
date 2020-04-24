import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'news-page',
    loadChildren: () => import('./news-page/news-page.module').then( m => m.NewsPagePageModule)
  },
  {
    path: 'photo-service',
    loadChildren: () => import('./photo-service/photo-service.module').then( m => m.PhotoServicePageModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then( m => m.FormsPageModule)
  },
  {
    path: 'display-form',
    loadChildren: () => import('./display-form/display-form.module').then( m => m.DisplayFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
