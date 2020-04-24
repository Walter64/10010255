import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoServicePageRoutingModule } from './photo-service-routing.module';

import { PhotoServicePage } from './photo-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoServicePageRoutingModule
  ],
  declarations: [PhotoServicePage]
})
export class PhotoServicePageModule {}
