import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OccidentePageRoutingModule } from './sut-routing.module';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SutPage } from './sut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OccidentePageRoutingModule
  ],
  declarations: [SutPage],
  providers:[InAppBrowser]
})
export class sutModule {}
