import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicucoPage } from './cicuco.page';

const routes: Routes = [
  {
    path: '',
    component: CicucoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicucoPageRoutingModule {}
