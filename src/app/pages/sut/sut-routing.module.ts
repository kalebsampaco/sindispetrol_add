import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SutPage } from './sut.page';

const routes: Routes = [
  {
    path: '',
    component: SutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OccidentePageRoutingModule {}
