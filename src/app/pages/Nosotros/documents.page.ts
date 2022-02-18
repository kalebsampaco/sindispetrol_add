//import { UploadDocumentPage } from '../upload-document_no/upload-document.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
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

  constructor(private router: Router, private modalCtrl: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  redFacebook() {
   window.open('https://www.facebook.com/SINDISPETROL')
  }

  nuevosEstatutos() {
    window.open('https://sindispetrol.xyz/uploads/NUEVOS_ESTATUTOS_INTERNOS_DE_SINDISPETROL_1_a0de6e27ff.pdf')
  }

  convencionColectiva() {
    window.open('https://sindispetrol.xyz/uploads/Convencion_colectiva_2018_2022_0fd7b3cffc.pdf')
  }
  async goToUploadDocuments() {
      /* const modal = await this.modalCtrl.create({
        component: UploadDocumentPage,
        cssClass: 'custom-modal'
      });
      return await modal.present(); */
  }

}
