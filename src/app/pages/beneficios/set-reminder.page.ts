import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.page.html',
  styleUrls: ['./set-reminder.page.scss'],
})
export class SetReminderPage implements OnInit {

  timeSlots = [];
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  webMutual() {

    //window.open('https://www.consolidaridad.com.co/consultas/autenticar')
    const browser = this.iab.create('https://www.consolidaridad.com.co/consultas/autenticar', '_blank');
  }

  linkEducacion() {
    //window.open('juntadirectiva.sindispetrol@gmail.com')
    const browser = this.iab.create('juntadirectiva.sindispetrol@gmail.com', '_blank');
  }

  linkRecreacion(){
    //window.open('juntadirectiva.sindispetrol@gmail.com')
    const browser = this.iab.create('juntadirectiva.sindispetrol@gmail.com', '_blank');
  }

  linkVivienda(){
    window.open('juntadirectiva.sindispetrol@gmail.com');
  }

  linkSalud(){
    window.open('juntadirectiva.sindispetrol@gmail.com');
  }

  addSlot() {
      this.timeSlots.length = this.timeSlots.length + 1;
  }

}
