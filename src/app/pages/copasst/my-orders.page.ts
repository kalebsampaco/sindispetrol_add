/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { GlobalServiceService } from '../services/global-service.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  public copasst: FormGroup;
  videoHeight: number = 315;
  videoWidth: number = 560;
  tabID = 'new';
  fileCertificado: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    watchSlidesProgress: true,
  };
  fileName: any;

  constructor(private router: Router,
    public formBuilder: FormBuilder,
    private gblService: GlobalServiceService,
    ) {
    this.copasst = this.formBuilder.group({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      nombreCompleto: ['', Validators.required],
      empresa: ['', Validators.required],
      tipoContrato: ['', Validators.required],
      gerenciaDondeLabora: ['', Validators.required],
      lugarTrabajo: ['', Validators.required],
      detallePeticion: ['', Validators.required],
    });
  }

  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  incomingfileCertificado(ev: any) {
    if (ev !== undefined) {
      if(ev.target.files[0].size > 823835){
        Swal.fire({
          icon: 'info',
          title: 'Archivo no subido',
          heightAuto: false,
          text: 'El archivo sobrepasa el máximo del tamaño permitido',
        });
        this.fileCertificado = null;
        $('#file').val('');
        return;
      }else {
        this.fileCertificado = ev.target.files[0];
      }

    }

  }

   logForm(){
    const data = new FormData();
    const json = JSON.stringify(this.copasst.value);
    console.log(json)
    /* const blob = new Blob([json], {
      type: 'application/json'
    }); */
    data.append('data', json);
    data.append('files.imagen', this.fileCertificado, this.fileCertificado.name);
    console.log(data.get('headers'));
    this.gblService.postServiceCopasst('copassts', data).subscribe(
      (res: any) => {

          Swal.fire({
            icon: 'success',
            title: 'Exito',
            heightAuto: false,
            text: 'Archivos subidos con éxito.',
          });
          this.fileCertificado = null;
          $('#file').val('');
          this.copasst.reset();
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          heightAuto: false,
          text: 'Ha ocurrido un error.',
          timer: 2000,
        });
        console.log('error enviando los documentos', error);
      }
    );
  }

  toastFireError(res: any) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      heightAuto: false,
      text: res.message,
      timer: 2000,
    });
  }

  toastFireErrorvalid(msm: any) {
    Swal.fire({
      icon: 'info',
      heightAuto: false,
      title: 'Importante',
      text: msm,
      // timer: 2000,
    });
  }

}
