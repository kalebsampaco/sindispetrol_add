import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OccidentePageRoutingModule } from './occidente-routing.module';

import { OccidentePage } from './occidente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OccidentePageRoutingModule
  ],
  declarations: [OccidentePage]
})
export class OccidentePageModule {}
