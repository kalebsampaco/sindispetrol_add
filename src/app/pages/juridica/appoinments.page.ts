/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { GlobalServiceService } from '../services/global-service.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.page.html',
  styleUrls: ['./appoinments.page.scss'],
})
export class AppoinmentsPage implements OnInit {


  subdirectivas = [
    {
      cod : 1,
      name : 'Meta'
    },
    {
      cod : 2,
      name : 'Bogotá'
    },
    {
      cod : 3,
      name : 'Cupiagua'
    },
    {
      cod : 4,
      name : 'Bucaramanga'
    },
    {
      cod : 5,
      name : 'Cicuco'
    },
    {
      cod : 6,
      name : 'Occidente'
    },
    {
      cod : 7,
      name : 'Barrancabermeja'
    },
  ];
  subdirectivaSelected='';


  usuario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    consulta: new FormControl(''),
  });

  constructor(
    private route: Router,
    private navCtrl: NavController,
    public _MessageService: MessageService,
    public gblService: GlobalServiceService
  ) { }

  ngOnInit() {
     this.usuario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', Validators.email),
      consulta: new FormControl('', Validators.required),
    });
  }

  enviarFormularioAfiliacion() {
    const data = {
      subdirectiva: this.subdirectivaSelected,
      nombre: this.usuario.value.nombre,
      email: this.usuario.value.email,
      consulta: this.usuario.value.consulta
    };
    this.gblService.postService('judicials', data).subscribe(() => {
                  Swal.fire({
                          title: 'Petición enviada',
                          text: 'Petición enviada correctamente',
                          icon: 'success',
                          heightAuto: false,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                        this.subdirectivaSelected = null;
                        this.usuario.reset();
                });
    console.log(this.usuario.value.nombre);
  }

  subDirectiva(sub){
    console.log(sub);
    this.subdirectivaSelected = sub;
  }


}
