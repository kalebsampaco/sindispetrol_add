import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaPageRoutingModule } from './meta-routing.module';

import { MetaPage } from './meta.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaPageRoutingModule
  ],
  declarations: [MetaPage],
  providers:[InAppBrowser]
})
export class MetaPageModule {}
