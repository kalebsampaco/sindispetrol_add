import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CicucoPageRoutingModule } from './cicuco-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CicucoPage } from './cicuco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicucoPageRoutingModule
  ],
  declarations: [CicucoPage],
  providers:[InAppBrowser]
})
export class CicucoPageModule {}
