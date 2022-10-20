import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './pages/guards/login.guard';

const routes: Routes = [
  /* {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  }, */
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
 /*  {
    path: 'mobile',
    loadChildren: () => import('./pages/mobile/mobile.module').then(m => m.MobilePageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  }, */

 /*  {
    path: 'location-map',
    loadChildren: () => import('./pages/location-map/location-map.module').then(m => m.LocationMapPageModule)
  }, */
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
  /* {
    path: 'pharmacy',
    loadChildren: () => import('./pages/pharmacy/pharmacy.module').then(m => m.PharmacyPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./pages/doctors/doctors.module').then(m => m.DoctorsPageModule)
  }, */
  {
    path: 'beneficios',
    loadChildren: () => import('./pages/beneficios/set-reminder.module').then(m => m.SetReminderPageModule)
  },
  /* {
    path: 'emergancy',
    loadChildren: () => import('./pages/emergancy/emergancy.module').then(m => m.EmergancyPageModule)
  },
  {
    path: 'current-location',
    loadChildren: () => import('./pages/current-location/current-location.module').then(m => m.CurrentLocationPageModule)
  }, */
  {
    path: 'juridica',
    loadChildren: () => import('./pages/juridica/appoinments.module').then(m => m.AppoinmentsPageModule)
  },
 /*  {
    path: 'chat-detail',
    loadChildren: () => import('./pages/chat-detail/chat-detail.module').then(m => m.ChatDetailPageModule)
  }, */
  /* {
    path: 'doctor-list',
    loadChildren: () => import('./pages/doctor-list/doctor-list.module').then(m => m.DoctorListPageModule)
  },
  {
    path: 'doctor-detail',
    loadChildren: () => import('./pages/doctor-detail/doctor-detail.module').then(m => m.DoctorDetailPageModule)
  },
  {
    path: 'get-ambulance',
    loadChildren: () => import('./pages/get-ambulance/get-ambulance.module').then(m => m.GetAmbulancePageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingPageModule)
  },
  {
    path: 'payment2',
    loadChildren: () => import('./pages/payment2/payment2.module').then(m => m.Payment2PageModule)
  }, */
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
    path: 'occidente',
    loadChildren: () => import('./pages/occidente/occidente.module').then( m => m.OccidentePageModule)
  },
  {
    path: 'barrancabermeja',
    loadChildren: () => import('./pages/barrancabermeja/barrancabermeja.module').then( m => m.BarrancabermejaPageModule)
  },
  /* {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
  },
  {
    path: 'upload-document',
    loadChildren: () => import('./pages/upload-document/upload-document.module').then(m => m.UploadDocumentPageModule)
  },
  {
    path: 'doc-list',
    loadChildren: () => import('./pages/doc-list/doc-list.module').then(m => m.DocListPageModule)
  } */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

