import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions}from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.page.html',
  styleUrls: ['./set-reminder.page.scss'],
})
export class SetReminderPage implements OnInit {
  browser: InAppBrowserObject;
  options: InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };
  target = '_system';
  timeSlots = [];
  constructor(private iab: InAppBrowser, public splashScreen: SplashScreen) { }

  ngOnInit() {
  }

  webMutual() {

    //window.open('https://www.consolidaridad.com.co/consultas/autenticar')
    this.browser =this.iab.create('https://www.consolidaridad.com.co/consultas/autenticar', '_system');
    this.browser.show();
    this.splashScreen.hide();
  }

  linkEducacion() {
    //window.open('juntadirectiva.sindispetrol@gmail.com')
    this.browser = this.iab.create('juntadirectiva.sindispetrol@gmail.com', '_system');
    this.browser.show();
    this.splashScreen.hide();
  }

  linkRecreacion(){
    //window.open('juntadirectiva.sindispetrol@gmail.com')
    this.browser = this.iab.create('juntadirectiva.sindispetrol@gmail.com', '_system');
    this.browser.show();
    this.splashScreen.hide();
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

  toastFireError(res: any) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: res.message,
      timer: 2000,
    });
  }

}
