import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AppoinmentsPageRoutingModule } from './appoinments-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppoinmentsPage } from './appoinments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AppoinmentsPageRoutingModule
  ],
  declarations: [AppoinmentsPage]
})
export class AppoinmentsPageModule {}
