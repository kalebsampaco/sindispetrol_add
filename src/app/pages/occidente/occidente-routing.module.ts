import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OccidentePage } from './occidente.page';

const routes: Routes = [
  {
    path: '',
    component: OccidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OccidentePageRoutingModule {}
