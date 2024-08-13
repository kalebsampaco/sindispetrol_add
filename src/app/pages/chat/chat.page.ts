/* eslint-disable object-shorthand */
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
    const data = {
        subdirectiva: this.subdirectivaSelected,
        TipoConsulta: this.consultaLaboralSelected,
        nombre: this.usuario.value.nombre,
        email: this.usuario.value.email,
        consulta: this.usuario.value.consulta
      };
     this.gblService.postService('laboraes', data).subscribe(() => {
      Swal.fire({
              title: 'Consulta enviada',
              text: 'Consulta enviada correctamente',
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
