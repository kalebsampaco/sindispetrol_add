import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalServiceService } from '../services/global-service.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-cicuco',
  templateUrl: './cicuco.page.html',
  styleUrls: ['./cicuco.page.scss'],
})
export class CicucoPage implements OnInit {
  url: any;
  image: any;

  constructor(private navCtrl: NavController,  private gblService: GlobalServiceService, private iab: InAppBrowser) { }

   async ngOnInit() {
    this.gblService.getService('cicucos').subscribe(
      async (res: any) => {

          console.log(res);
          this.url = 'http://'+res[0].url;
          this.image = 'https://sindispetrol.xyz'+res[0].imagen[0].url;
          console.log(this.url);
          console.log(this.image);
      },
      (error: any) => {

        console.log('error enviando tomandos los datos', error);
      }
    );
  }

  abrirUrl() {
    const browser = this.iab.create(`${this.url}`, '_blank');
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
