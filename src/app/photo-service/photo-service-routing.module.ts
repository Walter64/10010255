import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoServicePage } from './photo-service.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoServicePageRoutingModule {}
