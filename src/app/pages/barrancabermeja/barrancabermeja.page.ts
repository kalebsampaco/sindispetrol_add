import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalServiceService } from '../services/global-service.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions}from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-barrancabermeja',
  templateUrl: './barrancabermeja.page.html',
  styleUrls: ['./barrancabermeja.page.scss'],
})
export class BarrancabermejaPage implements OnInit {
  url: any;
  image: any;
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
  constructor(private navCtrl: NavController,
            private gblService: GlobalServiceService,
            private iab: InAppBrowser,
            public splashScreen: SplashScreen) { }

  ngOnInit() {

     this.gblService.getService('barrancas?populate=imagen').subscribe(
      (res: any) => {

          console.log(res);
          this.url = 'https://'+res.data[0].attributes.url;
          this.image = 'https://api.sindispetrol.xyz'+res.data[0].attributes.imagen.data[0].attributes.url;
          console.log(this.url);
          console.log(this.image);

      },
      (error: any) => {

        console.log('error enviando tomandos los datos', error);
      }
    );
  }

  paginaWeb(){
    //window.open(`${this.url}`);
    this.browser = this.iab.create(`${this.url}`, '_system');
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
