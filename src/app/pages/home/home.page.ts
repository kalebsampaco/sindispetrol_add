import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Subdirectivas = [ {sub:'Meta', page:'meta'}, {sub:'Bogotá', page:'bogota'}, {sub:'Cupiagua', page:'cipiagua'}, {sub:'Bucaramanga', page:'bucaramanga'},
    {sub:'Cicuco', page:'cicuco'}, {sub:'Barrancabermeja', page:'barrancabermeja'}, {sub:'Occidente', page:'occidente'}];

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
    // console.log(this.Subdirectivas)
  }


  //data.pos
  goToNosotros() {
      this.route.navigate(['/tabs/Nosotros']);
  }

  goToConsultasLaborales() {
      this.route.navigate(['/tabs/laborales']);
  }

  goToJuridica() {
      this.route.navigate(['/tabs/juridica']);
  }

  goToCopasst() {
      this.route.navigate(['/tabs/copasst']);
  }

  goToBeneficios() {
      this.route.navigate(['/tabs/beneficios']);
  }

  goToAfiliate() {
      this.route.navigate(['/tabs/afiliate']);
  }

  redirigir(page:any) {
    console.log(page)
    this.route.navigate([`/${page}`]);
  }



}
