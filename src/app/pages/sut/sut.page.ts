import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-occidente',
  templateUrl: './sut.page.html',
  styleUrls: ['./sut.page.scss'],
})
export class SutPage implements OnInit {
  url: any;
  image: any;
  constructor(private navCtrl: NavController, private gblService: GlobalServiceService, private iab: InAppBrowser) { }

  async ngOnInit() {
    this.gblService.getService('suts').subscribe(
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
