/* eslint-disable @typescript-eslint/naming-convention */
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GlobalServiceService } from '../services/global-service.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  public copasst: FormGroup;
  tabID = 'new';
  fileCertificado: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    watchSlidesProgress: true,
  };

  constructor(private router: Router,
    public formBuilder: FormBuilder,
    private gblService: GlobalServiceService,
    ) {
    this.copasst = this.formBuilder.group({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      nombre_completo: ['', Validators.required],
      empresa: ['', Validators.required],
      tipo_contrato: ['', Validators.required],
      gerencia_donde_labora: ['', Validators.required],
      lugar_trabajo: ['', Validators.required],
      detalle_peticion: ['', Validators.required],
    });
  }

  ngOnInit() {
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
        console.log(this.fileCertificado);
      }

    }

  }

  /* SubirDocumentos() {
    let data = new FormData();
    data.append('file', this.fileCarta);
    data.append('file', this.fileCertificado);
    data.append('idLoan', this.UltimoLoanId)
    this.apiService.post('loans/upload-support-files', data).subscribe(
      (res: any) => {
        if (res.status) {
          Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Archivos subidos con éxito.',
          });
          this.file = null;
          $("#file1").val('');
          $("#file2").val('');
          this.primero = false;
          this.segundo = false;
          this.tercero = false;
          this.cuarto = true;
          this.quinto = false;
          this.sexto = false;
        }
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error.',
          timer: 2000,
        });
        console.log('error enviendo los documentos', error);
      }
    );
  } */

   logForm(){
    const data = new FormData();
    const json = JSON.stringify(this.copasst.value);
    /* const blob = new Blob([json], {
      type: 'application/json'
    }); */
    console.log(json);
    data.append('data', json);
    data.append('files.imagen', this.fileCertificado);
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
