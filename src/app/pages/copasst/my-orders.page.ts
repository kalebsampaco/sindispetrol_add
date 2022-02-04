import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GlobalServiceService } from '../services/global-service.service'
import Swal from 'sweetalert2';
import * as $ from 'jquery';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  public copasst : FormGroup;
  tabID = 'new';
  fileCertificado: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    watchSlidesProgress: true,
  };

  constructor(private router: Router, 
    public formBuilder: FormBuilder,
    private gblService:GlobalServiceService,
    ) { 
    this.copasst = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      empresa: ['', Validators.required],
      tipoContrato: ['', Validators.required],
      gerenciaDondeLabora: ['', Validators.required],
      lugarTrabajo: ['', Validators.required],
      detallePeticion: ['', Validators.required],
    });
  }
 
  ngOnInit() {
  }

  incomingfileCertificado(ev: any) {
    if (ev != undefined) {
      this.fileCertificado = ev.target.files[0];
      console.log(this.fileCertificado)
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
    console.log(this.copasst.value, this.fileCertificado)
    let data = new FormData();
    const json = JSON.stringify(this.copasst.value);
    /* const blob = new Blob([json], {
      type: 'application/json'
    }); */
    console.log(json)
    data.append('files.imagen', this.fileCertificado);
    data.append('data', json);

    this.gblService.postService('copassts', data).subscribe(
      (res: any) => {
          
          Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Archivos subidos con éxito.',
          });
          this.fileCertificado = null;
          $("#file").val('');
          this.copasst.value.nombreCompleto = '';
          this.copasst.value.empresa = '';
          this.copasst.value.tipoContrato = '';
          this.copasst.value.gerenciaDondeLabora = '';
          this.copasst.value.lugarTrabajo = '';
          this.copasst.reset();
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
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
      text: res.message,
      timer: 2000,
    })
  }

  toastFireErrorvalid(msm: any) {
    Swal.fire({
      icon: 'info',
      title: 'Importante',
      text: msm,
      // timer: 2000,
    });
  }

}
