import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarrancabermejaPageRoutingModule } from './barrancabermeja-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BarrancabermejaPage } from './barrancabermeja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarrancabermejaPageRoutingModule
  ],
  declarations: [BarrancabermejaPage],
  providers:[InAppBrowser]
})
export class BarrancabermejaPageModule {}
