import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalServiceService } from '../services/global-service.service';

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
  subdirectivaSelected:string='';
 

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

 /*  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire({
              title: "Formulario de contacto",
              text: "Mensaje enviado correctamente",
              icon: 'success',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK',
            });
    });
  } */
  /* UsuarioChat(chat:any){
    console.log(chat);
    this.primerUserChat = chat;
    this.userSelections.push(chat);
    console.log(this.userSelections);
    this.valorInput = '';
  } */

  enviarFormularioAfiliacion() {
    /* sindispetrolbucaramanga2021@gmail.com - bucaramanga
    sindispetrolsubdirectivacicuco@gmail.com - Cicuco
    Sindispetrolductos@gmail.com - Occidente
    sindicasanarecupiagua@gmail.com - Cipiagua
    juntadirectiva.sindispetrol@gmail.com - Meta
    sindispetrol1@gmail.com - Bogota
    trabajadoressindispetrol@gmail.com - barrancabermeja */
    let data = {
      subdirectiva: this.subdirectivaSelected,
      nombre: this.usuario.value.nombre,
      email: this.usuario.value.email,
      consulta: this.usuario.value.consulta
    }
    this.gblService.postService('judicials', data).subscribe(() => {
                  Swal.fire({
                          title: "Archivo enviado",
                          text: "Archivo enviado correctamente",
                          icon: 'success',
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
    if(this.subdirectivaSelected==''){
        Swal.fire({
                title: "Sin Subdirectiva",
                text: "Por favor selecciones una subdirectiva para enviar la consulta",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
    }else if(this.subdirectivaSelected=='Meta'){
      let data = {
        to:'juntadirectiva.sindispetrol@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      }
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: "Formulario de contacto",
                text: "Mensaje enviado correctamente",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected=='Bogotá') {
      let data = {
        to:'sindispetrol1@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      }
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: "Formulario de contacto",
                text: "Mensaje enviado correctamente",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected=='Cipiagua'){
      let data = {
        to:'sindicasanarecupiagua@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      }
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: "Formulario de contacto",
                text: "Mensaje enviado correctamente",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected=='Bucaramanga'){
      let data = {
        to:'sindispetrolbucaramanga2021@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      }
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: "Formulario de contacto",
                text: "Mensaje enviado correctamente",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected=='Cicuco'){
      let data = {
        to:'sindispetrolsubdirectivacicuco@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      }
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: "Formulario de contacto",
                text: "Mensaje enviado correctamente",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected=='Occidente'){
      let data = {
        to:'Sindispetrolductos@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      }
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: "Formulario de contacto",
                text: "Mensaje enviado correctamente",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }else if(this.subdirectivaSelected=='Barrancabermeja'){
      let data = {
        to:'trabajadoressindispetrol@gmail.com',
        subject:`Consulta juridica de ${this.usuario.value.nombre}`,
        html: `<p>${this.usuario.value.nombre}</p><br>
              <p>${this.usuario.value.email}</p><br>
              <p>${this.usuario.value.consulta}</p><br>`
      }
      this._MessageService.sendMessage(data).subscribe(() => {
        Swal.fire({
                title: "Formulario de contacto",
                text: "Mensaje enviado correctamente",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
      });
    }
    console.log(this.usuario.value.nombre)
  }

  subDirectiva(sub){
    console.log(sub);
    this.subdirectivaSelected = sub;
  }
  

}
