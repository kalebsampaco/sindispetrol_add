import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CipiaguaPage } from './cipiagua.page';

const routes: Routes = [
  {
    path: '',
    component: CipiaguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CipiaguaPageRoutingModule {}
