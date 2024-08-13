import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YouTubePlayerModule } from "@angular/youtube-player";
import { MyOrdersPageRoutingModule } from './my-orders-routing.module';
import { MyOrdersPage } from './my-orders.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyOrdersPageRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [MyOrdersPage]
})
export class MyOrdersPageModule {}
