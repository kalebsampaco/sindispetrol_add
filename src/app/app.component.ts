import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      url: 'tabs/home',
      title: 'Inicio'
    },
    {
      url: 'tabs/Nosotros',
      title: 'Nosotros'
    },
    {
      url: 'tabs/laborales',
      title: 'Consultas Laborales'
    },
    {
      url: 'tabs/juridica',
      title: 'Consultas juridicas'
    },
    {
      url: 'tabs/copasst',
      title: 'Copasst'
    },
    {
      url: 'tabs/beneficios',
      title: 'Beneficios'
    },
    /* {
      url: 'chat',
      title: 'Chats'
    }, */
    {
      url: 'tabs/afiliate',
      title: 'Afiliate'
    },
  ];
  selectedIndex: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
