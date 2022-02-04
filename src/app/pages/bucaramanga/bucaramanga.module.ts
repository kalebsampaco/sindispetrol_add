import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BucaramangaPageRoutingModule } from './bucaramanga-routing.module';

import { BucaramangaPage } from './bucaramanga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BucaramangaPageRoutingModule
  ],
  declarations: [BucaramangaPage]
})
export class BucaramangaPageModule {}
