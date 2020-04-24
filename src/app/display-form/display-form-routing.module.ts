import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayFormPage } from './display-form.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayFormPageRoutingModule {}
