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

  addSlot() {
      this.timeSlots.length = this.timeSlots.length + 1;
  }

}
