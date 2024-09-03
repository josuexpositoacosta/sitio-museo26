import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { URL_SERVICIOS } from 'src/app/config/configbackend';

import { map } from 'rxjs/operators';


import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '../service.index';

import { Visita } from 'src/app/models/visita.model';



@Injectable({
  providedIn: 'root'
})
export class VisitaService {
     usuario!: Usuario; 
     token!: string;  
 
  constructor(
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService 
    ) {
   // this.cargarStorage();
    //console.log('Servicio de usuario listo');
   }

 

  obtenerContador() {        
    let url = URL_SERVICIOS + '/visitas';
    return  this.http.get(url);  
  }

  obtenerVisitasSemanales() {        
    let url = URL_SERVICIOS + '/visitas/visitasSemanales';

    return  this.http.get(url);
  
  }
  
  obtenerVisitasMensuales() {        
    let url = URL_SERVICIOS + '/visitas/visitasMensuales';

    return  this.http.get(url);
  
  }

  obtenerVisitasAnuales() {        
    let url = URL_SERVICIOS + '/visitas/visitasAnuales';

    return  this.http.get(url);
  
  }
  



    
  


  
}