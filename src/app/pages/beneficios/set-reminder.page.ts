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

    window.open('https://www.consolidaridad.com.co')
  }

  linkEducacion() {
    window.open('')
  }

  linkRecreacion(){
    window.open('')
  }

  linkVivienda(){
    window.open('')
  }

  linkSalud(){
    window.open('')
  }

  addSlot() {
      this.timeSlots.length = this.timeSlots.length + 1;
  }

}
