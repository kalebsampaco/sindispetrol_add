import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalServiceService } from '../services/global-service.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-occidente',
  templateUrl: './occidente.page.html',
  styleUrls: ['./occidente.page.scss'],
})
export class OccidentePage implements OnInit {
  url: any;
  image: any;
  constructor(private navCtrl: NavController, private gblService: GlobalServiceService, private iab: InAppBrowser) { }

  async ngOnInit() {
    this.gblService.getService('occidentes?populate=imagen').subscribe(
      async (res: any) => {

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
