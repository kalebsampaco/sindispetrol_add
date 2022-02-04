import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalServiceService } from '../services/global-service.service'
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.page.html',
  styleUrls: ['./meta.page.scss'],
})
export class MetaPage implements OnInit {
   url:any;
  image:any;
  constructor(private navCtrl: NavController, private gblService:GlobalServiceService) { }

  ngOnInit() {
    this.gblService.getService('metas').subscribe(
      (res: any) => {

          console.log(res)
          this.url = 'http://'+res[0].url
          this.image = 'https://sindispetrol.xyz'+res[0].imagen[0].url
          console.log(this.url)
          console.log(this.image)
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error.',
          timer: 2000,
        });
        console.log('error enviando tomandos los datos', error);
      }
    );
  }

  abrirUrl() {
    window.open(this.url)

  }

   toastFireError(res: any) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: res.message,
      timer: 2000,
    })
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
      this.navCtrl.back()
  }

}
