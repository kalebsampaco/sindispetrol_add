import { Component, OnInit } from '@angular/core';

import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { GlobalServiceService } from '../services/global-service.service';
@Component({
  selector: 'app-bucaramanga',
  templateUrl: './bucaramanga.page.html',
  styleUrls: ['./bucaramanga.page.scss'],
})
export class BucaramangaPage implements OnInit {
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
      url: any;
  image: any;
  constructor(
    private navCtrl: NavController,
    private gblService: GlobalServiceService,
    private iab: InAppBrowser,
    public splashScreen: SplashScreen) { }

  async ngOnInit() {
    this.gblService.getService('bucaramangas').subscribe(
      async (res: any) => {
          this.url = 'https://'+res[0].url;
          this.image = 'https://api.sindispetrol.xyz'+res[0].imagen[0].url;
      },
      (error: any) => {

        console.log('error enviando tomandos los datos', error);
      }
    );
  }

  abrirUrl() {
    this.browser = this.iab.create(`${this.url}`, '_systems');
    this.browser.show();
    this.splashScreen.hide();
  }

   toastFireError(res: any) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: res.message,
      timer: 2000,
    });
  }

  toastFireErrorvalid(msm: any) {
    Swal.fire({
      icon: 'info',
      title: 'Importante',
      text: msm,
      // timer: 2000,
    });
  }

  goBack() {
      this.navCtrl.back();
  }


}
