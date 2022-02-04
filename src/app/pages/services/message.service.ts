import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  API = environment.API;

  constructor(private _http: HttpClient) { }
  sendMessage(body) {
  return this._http.post(`${this.API}emails`, body);
  }
}
