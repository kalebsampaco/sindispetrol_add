import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  browser: InAppBrowserObject;
  options: InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };
  target = '_system';
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
    private router: Router,
    private iab: InAppBrowser,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  paginaWeb(){
    //window.open(`${this.url}`);
    this.browser = this.iab.create('https://sindispetrol.xyz/política-tratamiento-datos', '_system');
    this.browser.show();
    this.splashScreen.hide();

  }

  redFacebook() {
    //window.open('https://www.facebook.com/SINDISPETROL', this.target, this.option);

    this.browser = this.iab.create('https://www.facebook.com/SINDISPETROL', this.target, this.options);
    this.browser.on('loadstop').subscribe(event => {
      const navUrl = event.url;
      if (navUrl.includes('success')) {
       this.browser.close();
      }
    });
  }

  desarrollado(){
    this.browser = this.iab.create('https://github.com/kalebsampaco', this.target, this.options);
    this.browser.on('loadstop').subscribe(event => {
      const navUrl = event.url;
      if (navUrl.includes('success')) {
       this.browser.close();
      }
    });
  }

}
