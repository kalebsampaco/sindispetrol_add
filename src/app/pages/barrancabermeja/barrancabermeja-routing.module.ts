import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarrancabermejaPage } from './barrancabermeja.page';

const routes: Routes = [
  {
    path: '',
    component: BarrancabermejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarrancabermejaPageRoutingModule {}
