import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'Nosotros',
        loadChildren: () => import('../Nosotros/documents.module').then(m => m.DocumentsPageModule)
      },
      {
        path: 'afiliate',
        loadChildren: () => import('../afiliate/choose-location.module').then(m => m.ChooseLocationPageModule)
      },
      {
        path: 'juridica',
        loadChildren: () => import('../juridica/appoinments.module').then(m => m.AppoinmentsPageModule)
      },
      {
        path: 'laborales',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'copasst',
        loadChildren: () => import('../copasst/my-orders.module').then(m => m.MyOrdersPageModule)
      },
      {
        path: 'beneficios',
        loadChildren: () => import('../beneficios/set-reminder.module').then(m => m.SetReminderPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
