import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'Nosotros',
    loadChildren: () => import('./pages/Nosotros/documents.module').then(m => m.DocumentsPageModule)
  },
  {
    path: 'laborales',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'afiliate',
    loadChildren: () => import('./pages/afiliate/choose-location.module').then(m => m.ChooseLocationPageModule)
  },
  {
    path: 'beneficios',
    loadChildren: () => import('./pages/beneficios/set-reminder.module').then(m => m.SetReminderPageModule)
  },
  {
    path: 'juridica',
    loadChildren: () => import('./pages/juridica/appoinments.module').then(m => m.AppoinmentsPageModule)
  },
  {
    path: 'copasst',
    loadChildren: () => import('./pages/copasst/my-orders.module').then(m => m.MyOrdersPageModule)
  },
  {
    path: 'meta',
    loadChildren: () => import('./pages/meta/meta.module').then( m => m.MetaPageModule)
  },
  {
    path: 'bogota',
    loadChildren: () => import('./pages/bogota/bogota.module').then( m => m.BogotaPageModule)
  },
  {
    path: 'cipiagua',
    loadChildren: () => import('./pages/cipiagua/cipiagua.module').then( m => m.CipiaguaPageModule)
  },
  {
    path: 'bucaramanga',
    loadChildren: () => import('./pages/bucaramanga/bucaramanga.module').then( m => m.BucaramangaPageModule)
  },
  {
    path: 'cicuco',
    loadChildren: () => import('./pages/cicuco/cicuco.module').then( m => m.CicucoPageModule)
  },
  {
    path: 'caribe-norte',
    loadChildren: () => import('./pages/occidente/occidente.module').then( m => m.OccidentePageModule)
  },
  {
    path: 'casabe',
    loadChildren: () => import('./pages/barrancabermeja/barrancabermeja.module').then( m => m.BarrancabermejaPageModule)
  },
  {
    path: 'sut',
    loadChildren: () => import('./pages/sut/sut.module').then(m => m.sutModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

