import { NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Columns, Img, PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import SignaturePad from 'signature_pad';


// import the pdfmake library
import * as pdfMake from "pdfmake/build/pdfmake";
import { GlobalServiceService } from '../services/global-service.service';

/* declare var require: any
const FileSaver = require('file-saver'); */

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.page.html',
  styleUrls: ['./choose-location.page.scss'],
})
export class ChooseLocationPage implements OnInit {
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

  subdirectivaSelected:any;
  blob:any;

 /*  usuario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    consulta: new FormControl(''),
  }); */
  generatedPDF: any;
  pdfSrc;
  documentDefinition: object;
  ciudad: any;
  fecha: any;
  nombreCompleto: any;
  cedula: any;
  ciudadCedula: any;
  nombreEmpresa: any;
  cargo: any;
  direccion: any;
  barrio: any;
  email: any;
  celular: any;
   @ViewChild('sPad', {static: true}) signaturePadElement;
  signaturePad: any;
  dataURL: any;

  constructor(
    private route: Router,
    private navCtrl: NavController,
    public gblService: GlobalServiceService) { }

  ngOnInit() {
    this.fecha = new Date().toISOString();
  }

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  clear() {
    this.signaturePad.clear();
  }




 /*
  downloadPdf() {
    const pdfUrl = 'assets/imgs/NUEVO  FORMATO DE AFILIACIONES.pdf';
    const pdfName = 'NUEVO  FORMATO DE AFILIACIONES';
    FileSaver.saveAs(pdfUrl, pdfName);
  } */



  subDirectiva(sub){
    console.log(sub);
    this.subdirectivaSelected = sub;
  }

  async genrarPdf(){
    let blob
    let linkSource:any;
    console.log(new Date(this.fecha).toISOString().split('T22')[0], 'ciudad')
    if(this.subdirectivaSelected==undefined){
            Swal.fire({
                    title: "Sin Subdirectiva",
                    text: "Por favor selecciones una subdirectiva para enviar el formulario",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.ciudad==undefined) {
          Swal.fire({
                    title: "Sin ciudad",
                    text: "Por favor escriba una ciudad",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.fecha==undefined) {
          Swal.fire({
                    title: "Sin fecha",
                    text: "Por favor escriba una fecha",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.nombreCompleto==undefined) {
          Swal.fire({
                    title: "sin nombre completo",
                    text: "Por favor escriba su nombre completo",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.cedula==undefined) {
          Swal.fire({
                    title: "Sin cedula",
                    text: "Por favor escriba su cédula",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.ciudadCedula==undefined) {
          Swal.fire({
                    title: "Sin ciudad de la cédula",
                    text: "Por favor escriba la ciudad de su cédula",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.nombreEmpresa==undefined) {
          Swal.fire({
                    title: "Sin nombre de la empresa",
                    text: "Por favor escriba el nombre de la empresa donde labora",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.cargo==undefined) {
          Swal.fire({
                    title: "Sin cargo",
                    text: "Por favor escriba el cargo en su empresa",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }
        else if(this.direccion==undefined) {
          Swal.fire({
                    title: "No ha escrito dirección",
                    text: "Por favor escriba la dirección de su residencia",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.barrio==undefined) {
          Swal.fire({
                    title: "Sin barrio",
                    text: "Por favor escriba el barrio donde vive",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.email==undefined) {
          Swal.fire({
                    title: "Sin email",
                    text: "Por favor escriba su correo electrónico",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if(this.celular==undefined) {
          Swal.fire({
                    title: "Sin celular",
                    text: "Por favor escriba su número de celular",
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                  });
        }else if (this.signaturePad.isEmpty()) {
                alert('Por favor realice su firma.');
        }
        else {
          PdfMakeWrapper.setFonts(pdfFonts);




              const pdf = new PdfMakeWrapper();
              pdf.pageSize('A4');
              pdf.pageMargins([ 40, 40, 80, 80 ]);
              // pdf.background(await new Img('../../../assets/imgs/logo.jpg').build() );
              pdf.add( await new Img('../../../assets/imgs/header-pdf.png').build() );

              pdf.add(
                  pdf.ln(2)
              );
              pdf.add(new Txt(`CIUDAD Y FECHA        ${this.ciudad} ${new Date(this.fecha).toISOString().split('T')[0]}`).end );
              pdf.add(
                  pdf.ln(2)
              );
              pdf.add(new Txt(`Yo, ${this.nombreCompleto} identidicado(a) con cédula de ciudadanía N° ${this.cedula} de ${this.ciudadCedula} en mi condición de Trabajador de la Empresa ${this.nombreEmpresa}, en el cargo u oficio de ${this.cargo} solicito a usted aprobar mi ingreso como afiliado a la Organización Sindical SINDISPETROL, comprometiéndome a cumplir fielmente los estatutos sindicales que los regulan.`).alignment('justify').end );
              pdf.add(new Txt('Acepto desarrollar las decisiones emanadas por los Organismos de Dirección del  Sindicato.').alignment('justify').end );
              pdf.add(
                  pdf.ln(1)
              );
              pdf.add(new Txt('Autorizo se descuente por nómina el valor del uno por ciento (1%) de mi Salario Básico Mensual como Cuota Ordinaria Sindical, para que sea consignado a favor de SINDISPETROL en la cuenta única de ahorros N° 146000657289 del Banco Davivienda, de conformidad con lo señalado en los artículos 56,57 y 58 del capítulo IX de los estatutos. Por ley Habeas data 1581/2012, autorizo a la empresa a informar el descuento de aportes sindicales de nómina quincenal a el sindicato para los temas de tesorería decreto 2264/2013.').alignment('justify').end);
              pdf.add(
                  pdf.ln(1)
              );
              this.dataURL = await this.signaturePad.toDataURL();
                console.log(this.dataURL)
              pdf.add(new Txt('Cordialmente,').end );
              pdf.add(
                  pdf.ln(1)
              );
              pdf.add(await new Img(this.dataURL).build() );

              pdf.add(new Txt('___________________________________________').end );
              pdf.add(new Txt('Firma.').end );
              pdf.add(new Txt('Cordialmente,').end );
              pdf.add(new Txt(`CC. ${this.cedula}`).end );
               pdf.add(
                  pdf.ln(1)
              );

              pdf.add(new Columns([ `Dirección: ${this.direccion}`, `Barrio: ${this.barrio}`]).end );

              pdf.add(new Columns([ `email: ${this.email}`, `Celular: ${this.celular}`]).end );
               pdf.add(
                  pdf.ln(1)
              );
               pdf.add(await new Img('../../../assets/imgs/footer-pdf.png').build() );

              pdf.create().getDataUrl(async function(url) {

                  blob  = url;
                   console.log(blob, 'blob')
                  return blob });


          Swal.fire({
            title: 'Lea las condiciones de la afiliación y acepte si esta de acuerdo',
            text:'Autorizo se descuente por nómina el valor del uno por ciento (1%) de mi Salario Básico Mensual como Cuota Ordinaria Sindical, para que sea consignado a favor de SINDISPETROL en la cuenta única de ahorros N° 146000657289 del Banco Davivienda, de conformidad con lo señalado en los artículos 56,57 y 58 del capítulo IX de los estatutos. Por ley Habeas data 1581/2012, autorizo a la empresa a informar el descuento de aportes sindicales de nómina quincenal a el sindicato para los temas de tesorería decreto 2264/2013.',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Acepto',
            denyButtonText: `No acepto`,
          }).then(async (result) => {
            if (result.isConfirmed) {





            if(this.subdirectivaSelected=='Meta'){


                let data = {
                  subdirectiva:'juntadirectiva.sindispetrol@gmail.com',
                  ciudad: this.ciudad,
                  fecha: this.fecha,
                  nombreCompleto: this.nombreCompleto,
                  cedula: this.cedula,
                  ciudadCedula: this.ciudadCedula,
                  nombreEmpresa: this.nombreEmpresa,
                  cargo:this.cargo,
                  direccion:this.direccion,
                  barrio:this.barrio,
                  email:this.email,
                  celular:this.celular,
                  pdf64:blob,
                }
                this.gblService.postService('afiliaciones', data).subscribe(() => {
                  Swal.fire({
                          title: "Archivo enviado",
                          text: "Archivo enviado correctamente",
                          icon: 'success',
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
              }else if(this.subdirectivaSelected=='Bogotá') {


                  let data = {
                  subdirectiva:'sindispetrol1@gmail.com',
                  ciudad: this.ciudad,
                  fecha: this.fecha,
                  nombreCompleto: this.nombreCompleto,
                  cedula: this.cedula,
                  ciudadCedula: this.ciudadCedula,
                  nombreEmpresa: this.nombreEmpresa,
                  cargo:this.cargo,
                  direccion:this.direccion,
                  barrio:this.barrio,
                  email:this.email,
                  celular:this.celular,
                  pdf64: blob,
                }

                this.gblService.postService('afiliaciones', data).subscribe(() => {
                  Swal.fire({
                          title: "Archivo enviado",
                          text: "Archivo enviado correctamente",
                          icon: 'success',
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
              }else if(this.subdirectivaSelected=='Cipiagua'){

                  let data = {
                  subdirectiva:'sindicasanarecupiagua@gmail.com',
                  ciudad: this.ciudad,
                  fecha: this.fecha,
                  nombreCompleto: this.nombreCompleto,
                  cedula: this.cedula,
                  ciudadCedula: this.ciudadCedula,
                  nombreEmpresa: this.nombreEmpresa,
                  cargo:this.cargo,
                  direccion:this.direccion,
                  barrio:this.barrio,
                  email:this.email,
                  celular:this.celular,
                  pdf64: blob
                }

                this.gblService.postService('afiliaciones', data).subscribe(() => {
                  Swal.fire({
                          title: "Archivo enviado",
                          text: "Archivo enviado correctamente",
                          icon: 'success',
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
              }else if(this.subdirectivaSelected=='Bucaramanga'){

                  let data = {
                  subdirectiva:'sindispetrolbucaramanga2021@gmail.com',
                  ciudad: this.ciudad,
                  fecha: this.fecha,
                  nombreCompleto: this.nombreCompleto,
                  cedula: this.cedula,
                  ciudadCedula: this.ciudadCedula,
                  nombreEmpresa: this.nombreEmpresa,
                  cargo:this.cargo,
                  direccion:this.direccion,
                  barrio:this.barrio,
                  email:this.email,
                  celular:this.celular,
                  pdf64: blob,
                }

                this.gblService.postService('afiliaciones', data).subscribe(() => {
                  Swal.fire({
                          title: "Archivo enviado",
                          text: "Archivo enviado correctamente",
                          icon: 'success',
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
              }else if(this.subdirectivaSelected=='Cicuco'){

                  let data = {
                  subdirectiva:'sindispetrolsubdirectivacicuco@gmail.com',
                  ciudad: this.ciudad,
                  fecha: this.fecha,
                  nombreCompleto: this.nombreCompleto,
                  cedula: this.cedula,
                  ciudadCedula: this.ciudadCedula,
                  nombreEmpresa: this.nombreEmpresa,
                  cargo:this.cargo,
                  direccion:this.direccion,
                  barrio:this.barrio,
                  email:this.email,
                  celular:this.celular,
                  pdf64: blob,
                }

                this.gblService.postService('afiliaciones', data).subscribe(() => {
                  Swal.fire({
                          title: "Archivo enviado",
                          text: "Archivo enviado correctamente",
                          icon: 'success',
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
              }else if(this.subdirectivaSelected=='Occidente'){

                  let data = {
                  subdirectiva:'Sindispetrolductos@gmail.com',
                  ciudad: this.ciudad,
                  fecha: this.fecha,
                  nombreCompleto: this.nombreCompleto,
                  cedula: this.cedula,
                  ciudadCedula: this.ciudadCedula,
                  nombreEmpresa: this.nombreEmpresa,
                  cargo:this.cargo,
                  direccion:this.direccion,
                  barrio:this.barrio,
                  email:this.email,
                  celular:this.celular,
                  pdf64: blob,
                }

                this.gblService.postService('afiliaciones', data).subscribe(() => {
                  Swal.fire({
                          title: "Archivo enviado",
                          text: "Archivo enviado correctamente",
                          icon: 'success',
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
              }else if(this.subdirectivaSelected=='Barrancabermeja'){

                  let data = {
                  subdirectiva:'trabajadoressindispetrol@gmail.com',
                  ciudad: this.ciudad,
                  fecha: this.fecha,
                  nombreCompleto: this.nombreCompleto,
                  cedula: this.cedula,
                  ciudadCedula: this.ciudadCedula,
                  nombreEmpresa: this.nombreEmpresa,
                  cargo:this.cargo,
                  direccion:this.direccion,
                  barrio:this.barrio,
                  email:this.email,
                  celular:this.celular,
                  pdf64: blob,
                }

                this.gblService.postService('afiliaciones', data).subscribe(() => {
                  Swal.fire({
                          title: "Archivo enviado",
                          text: "Archivo enviado correctamente",
                          icon: 'success',
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'OK',
                        });
                });
              }
              pdf.create().download();

              this.ciudad = ''
              this.fecha = ''
              this.nombreCompleto = ''
              this.cedula = ''
              this.ciudadCedula = ''
              this.nombreEmpresa = ''
              this.cargo = ''
              this.direccion = ''
              this.barrio = ''
              this.email = ''
              this.celular = '';
              this.clear();
            } else if (result.isDenied) {
              Swal.fire('No se generó el documento de afiliación, gracias por su interés', '', 'info')
            }
          })
        }
  }



  goBack() {
      this.navCtrl.back();
  }

}
