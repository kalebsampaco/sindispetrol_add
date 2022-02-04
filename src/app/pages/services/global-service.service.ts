import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  API = environment.API;
  constructor(private _http: HttpClient) { }

  postService(path:any, body:any) {
    return this._http.post(`${this.API}${path}`, body);
  }

  getService(path:any) {
  return this._http.get(`${this.API}${path}`);
  }
}
