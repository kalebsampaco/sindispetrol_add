/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
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

  consultasLaborales = [
    {
      cod: 1,
      name: 'Contrato de trabajo'
    },
    {
      cod:2,
      name:'Pago de nómina'
    },
    {
      cod:3,
      name:'Novedades de tiempos'
    },
    {
      cod:4,
      name:'Liquidaciones (fin de contrato)'
    },
    {
      cod:5,
      name:'Pago de cesantías'
    },
    {
      cod:6,
      name:'Cotización de seguridad integral'
    },
    {
      cod:7,
      name:'Jornada de trabajo'
    },
    {
      cod:8,
      name:'Incapacidades'
    },
    {
      cod:9,
      name:'Vacaciones'
    },
    {
      cod:10,
      name:'Maternidad'
    },
    {
      cod:11,
      name:'Reglamento interno de trabajo'
    },
    {
      cod:12,
      name:'Enfermedad laboral'
    },
    {
      cod:13,
      name:'Accidente laboral'
    },
    {
      cod:14,
      name:'Exámenes ocupacionales'
    },
    {
      cod:15,
      name:'Sindicato y agremiaciones'
    },
     {
      cod:16,
      name:'Capacitaciones'
    },
    {
      cod:17,
      name:'Dotación y EPP'
    },
    {
      cod:18,
      name:'Permisos y licencias'
    },
    {
      cod:19,
      name:'Procesos disciplinarios'
    },
    {
      cod:20,
      name:'Despidos y sanciones'
    },
    {
      cod:21,
      name:'Auxilios y subsidios'
    }
  ];
  subdirectivaSelected='';
  consultaLaboralSelected='';

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
    /* sindispetrolbucaramanga2021@gmail.com - bucaramanga
    sindispetrolsubdirectivacicuco@gmail.com - Cicuco
    Sindispetrolductos@gmail.com - Occidente
    sindicasanarecupiagua@gmail.com - Cipiagua
    juntadirectiva.sindispetrol@gmail.com - Meta
    sindispetrol1@gmail.com - Bogota
    trabajadoressindispetrol@gmail.com - barrancabermeja */
    const data = {
        subdirectiva: this.subdirectivaSelected,
        tipo_consulta: this.consultaLaboralSelected,
        nombre: this.usuario.value.nombre,
        email: this.usuario.value.email,
        consulta: this.usuario.value.consulta
      };
     this.gblService.postService('laboraes', data).subscribe(() => {
                  Swal.fire({
                          title: 'Archivo enviado',
                          text: 'Archivo enviado correctamente',
                          icon: 'success',
                          heightAuto: false,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
                this.subdirectivaSelected = null;
                this.consultaLaboralSelected = null;
                this.usuario.reset();
    /* if(this.subdirectivaSelected===''){
        Swal.fire({
                title: 'Sin Subdirectiva',
                text: 'Por favor selecciones una subdirectiva para enviar la consulta',
                icon: 'warning',
                heightAuto: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
    }else if(this.subdirectivaSelected==='Meta'){
      const data = {
        to:'juntadirectiva.sindispetrol@gmail.com',
        subject:`Consulta labooral de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
              <p>${this.consultaLaboralSelected}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      };
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: 'Formulario de contacto',
                text: 'Mensaje enviado correctamente',
                icon: 'success',
                heightAuto: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected==='Bogotá') {
      const data = {
        to:'sindispetrol1@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
        <p>${this.consultaLaboralSelected}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      };
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: 'Formulario de contacto',
                text: 'Mensaje enviado correctamente',
                icon: 'success',
                heightAuto: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected==='Cipiagua'){
      const data = {
        to:'sindicasanarecupiagua@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
        <p>${this.consultaLaboralSelected}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      };
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: 'Formulario de contacto',
                text: 'Mensaje enviado correctamente',
                icon: 'success',
                heightAuto: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected==='Bucaramanga'){
      const data = {
        to:'sindispetrolbucaramanga2021@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
        <p>${this.consultaLaboralSelected}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      };
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: 'Formulario de contacto',
                text: 'Mensaje enviado correctamente',
                icon: 'success',
                heightAuto: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected==='Cicuco'){
      const data = {
        to:'sindispetrolsubdirectivacicuco@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
        <p>${this.consultaLaboralSelected}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      };
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: 'Formulario laboral',
                text: 'Mensaje enviado correctamente',
                icon: 'success',
                heightAuto: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected==='Occidente'){
      const data = {
        to:'Sindispetrolductos@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
        <p>${this.consultaLaboralSelected}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      };
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: 'Formulario de contacto',
                text: 'Mensaje enviado correctamente',
                icon: 'success',
                heightAuto: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected==='Barrancabermeja'){
      const data = {
        to:'trabajadoressindispetrol@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
        <p>${this.consultaLaboralSelected}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      };
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: 'Formulario de contacto',
                text: 'Mensaje enviado correctamente',
                icon: 'success',
                heightAuto: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }; */
    console.log(this.usuario.value.nombre);
  }

  subDirectiva(sub){
    console.log(sub);
    this.subdirectivaSelected = sub;
  }
  consultaLaboralSelect(consulta){
    console.log(consulta);
    this.consultaLaboralSelected = consulta;
  }

}
