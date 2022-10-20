import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetReminderPageRoutingModule } from './set-reminder-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SetReminderPage } from './set-reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetReminderPageRoutingModule
  ],
  declarations: [SetReminderPage],
  providers:[InAppBrowser]
})
export class SetReminderPageModule {}
