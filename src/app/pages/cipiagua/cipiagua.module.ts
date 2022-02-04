import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CipiaguaPageRoutingModule } from './cipiagua-routing.module';

import { CipiaguaPage } from './cipiagua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CipiaguaPageRoutingModule
  ],
  declarations: [CipiaguaPage]
})
export class CipiaguaPageModule {}
