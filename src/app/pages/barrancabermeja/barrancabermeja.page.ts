import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalServiceService } from '../services/global-service.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-barrancabermeja',
  templateUrl: './barrancabermeja.page.html',
  styleUrls: ['./barrancabermeja.page.scss'],
})
export class BarrancabermejaPage implements OnInit {
  url: any;
  image: any;
  constructor(private navCtrl: NavController,
            private gblService: GlobalServiceService,
            private iab: InAppBrowser) { }

  ngOnInit() {

     this.gblService.getService('barrancas').subscribe(
      (res: any) => {

          console.log(res);
          this.url = 'http://'+res[0].url;
          this.image = 'https://sindispetrol.xyz'+res[0].imagen.url;
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
