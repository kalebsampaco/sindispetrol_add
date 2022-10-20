import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BogotaPageRoutingModule } from './bogota-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BogotaPage } from './bogota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BogotaPageRoutingModule
  ],
  declarations: [BogotaPage],
  providers:[InAppBrowser]
})
export class BogotaPageModule {}
