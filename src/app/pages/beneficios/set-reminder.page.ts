import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.page.html',
  styleUrls: ['./set-reminder.page.scss'],
})
export class SetReminderPage implements OnInit {

  timeSlots = [];
  constructor() { }

  ngOnInit() {
  }

  webMutual() {

    window.open('https://www.consolidaridad.com.co/consultas/autenticar')
  }

  linkEducacion() {
    window.open('juntadirectiva.sindispetrol@gmail.com')
  }

  linkRecreacion(){
    window.open('juntadirectiva.sindispetrol@gmail.com')
  }

  linkVivienda(){
    window.open('juntadirectiva.sindispetrol@gmail.com')
  }

  linkSalud(){
    window.open('juntadirectiva.sindispetrol@gmail.com')
  }

  addSlot() {
      this.timeSlots.length = this.timeSlots.length + 1;
  }

}
