import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// to use ngModule need to add formsModule also to do two way binding
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayFormPageRoutingModule } from './display-form-routing.module';

import { DisplayFormPage } from './display-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayFormPageRoutingModule
  ],
  declarations: [DisplayFormPage]
})
export class DisplayFormPageModule {}
