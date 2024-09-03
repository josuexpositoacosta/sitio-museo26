import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  server = "http://localhost:3000"

  constructor(private http: HttpClient
    
    ) { }

    getImages(){
      return this.http.get(`${this.server}/dowload`);
    }

    uploadImage(name: string, file: File): Observable<Object>{
      const form = new FormData();
      form.append('name', name);
      form.append('file', file, 'form-data' );
      return this.http.post<Object>(`${this.server}/upload`, form);
    }
}
