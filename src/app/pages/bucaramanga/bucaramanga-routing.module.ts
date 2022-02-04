import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BucaramangaPage } from './bucaramanga.page';

const routes: Routes = [
  {
    path: '',
    component: BucaramangaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BucaramangaPageRoutingModule {}
