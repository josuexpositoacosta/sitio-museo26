import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Global } from './global';

import { Observable } from 'rxjs';
import { Archivo } from 'src/app/models/archivo.model';
import { URL_SERVICIOS } from 'src/app/config/configbackend';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url!: string;

  constructor(private _http: HttpClient) {
    this.url =  URL_SERVICIOS;
    }

    uploadFile(File: any): Observable<any> {
      var peticion = 'api/Subir/';
      var json = JSON.stringify(File);
      console.log(File);

      var headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this._http.post(this.url + peticion, File, { headers });
      }
      
      getUploads(): Observable<any> {
      var peticion = 'api/ImagenesSubidas';
      return this._http.get(this.url + peticion);
      }
  
}
