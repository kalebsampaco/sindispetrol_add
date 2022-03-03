//import { UploadDocumentPage } from '../upload-document_no/upload-document.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {InAppBrowser, InAppBrowserOptions}from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
  options : InAppBrowserOptions = {
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
  target = '_system'

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    watchSlidesProgress: true,
  };
  JuntaDirectiva = [
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

  constructor(
    private iab: InAppBrowser,
    private router: Router, private modalCtrl: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  redFacebook() {
   this.iab.create('https://www.facebook.com/SINDISPETROL',this.target,this.options);
  }

  nuevosEstatutos() {
     this.iab.create('https://sindispetrol.xyz/uploads/NUEVOS_ESTATUTOS_INTERNOS_DE_SINDISPETROL_1_a0de6e27ff.pdf',this.target,this.options);
  }

  convencionColectiva() {
    this.iab.create('https://sindispetrol.xyz/uploads/Convencion_colectiva_2018_2022_0fd7b3cffc.pdf',this.target,this.options);
  }

  async goToUploadDocuments() {
      /* const modal = await this.modalCtrl.create({
        component: UploadDocumentPage,
        cssClass: 'custom-modal'
      });
      return await modal.present(); */
  }

}
