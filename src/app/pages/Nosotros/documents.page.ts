//import { UploadDocumentPage } from '../upload-document_no/upload-document.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
//import { InAppBrowser,  InAppBrowserObject, InAppBrowserOptions} from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import Swal from 'sweetalert2';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  options: InAppBrowserOptions = {
    location : 'no',//Or 'no'
    hidden : 'yes', //Or  'yes'
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

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    watchSlidesProgress: true,
  };
  juntaDirectiva = [
    {name:'Berquiz Borja Orduz', cargo:'Presidente Nacional', url:'assets/imgs/presidente.png'},
    {name:'Ricaurte Reina Altuve', cargo:'Vicepresidente', url:'assets/imgs/vicepresidente.png'},
    {name:'Rodolfo Romero', cargo:'Secretario Nal.', url:'assets/imgs/Rodolfo.png'},
    {name:'Hernan Rojas', cargo:'Fiscal', url:'assets/imgs/Hernan.png'},
    {name:'Leonardo López', cargo:'Tesorero', url:'assets/imgs/Leonardo.png'},
    {name:'Eduber Peña', cargo:'Sec. Organización', url:'assets/imgs/Eduber.png'},
    {name:'Javier Díaz', cargo:'Sec. FRC', url:'assets/imgs/javier.png'},
    {name:'Ivan Camacho', cargo:'Sec. Prom. Social', url:'assets/imgs/ivan.png'},
    {name:'Joseph Pinzon', cargo:'Sec. Comunicaciones', url:'assets/imgs/joseph.png'},
    {name:'Victor Julio Villarreal', cargo:'Secretario jurídico Nacional', url:'assets/imgs/Victor Julio.png'},

  ];
  browser: InAppBrowserObject;

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    public splashScreen: SplashScreen,
    private gblService: GlobalServiceService,
    //private bTab: BrowserTab
    ) { }

  ngOnInit() {
    this.getJunta();
  }

  getJunta(){
    this.gblService.getService('juntas').subscribe(
      (res: any) => {
          res.forEach((el:any) => {
            el.url.url = 'https://api.sindispetrol.xyz'+el.url.url;
          });
          console.log(res);
          this.juntaDirectiva = res.sort(function (a, b) {
              if (a.id > b.id) {
                return 1;
              }
              if (a.id < b.id) {
                return -1;
              }
              // a must be equal to b
              return 0;
          });
      },
      (error: any) => {

        console.log('error consultando meta', error);
      }
    );
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

  nuevosEstatutos() {
    //window.open('http://datos-jireth.gewwtech.com/NUEVOS_ESTATUTOS_INTERNOS_DE_SINDISPETROL.pdf', this.target, this.option);
    // eslint-disable-next-line max-len
    this.browser = this.iab.create('https://api.sindispetrol.xyz/uploads/NUEVOS_ESTATUTOS_INTERNOS_DE_SINDISPETROL_compressed_9c9a9b1bbf.pdf', this.target, this.options);
    /* this.browser.on('loadstop').subscribe(event => {
      const navUrl = event.url;
      if (navUrl.includes('success')) {
       this.browser.close();
      }
    }); */
  }

  convencionColectiva() {
    //window.open('http://datos-jireth.gewwtech.com/Convencion_colectiva.pdf', this.target, this.option);
    this.browser = this.iab.create('https://api.sindispetrol.xyz/uploads/CONVENCION_COLECTIVA_2023_2026_CAPITULO_SINDISPETROL_529a065569.pdf', this.target, this.options);
    this.browser.on('loadstop').subscribe(event => {
      const navUrl = event.url;
      if (navUrl.includes('success')) {
       this.browser.close();
      }
    });
  }
  async goToUploadDocuments() {
      /* const modal = await this.modalCtrl.create({
        component: UploadDocumentPage,
        cssClass: 'custom-modal'
      });
      return await modal.present(); */
  }


  toastFireError(res: any) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: res.message,
      timer: 4000,
    });
  }
}
