import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Pagini } from 'src/app/models/pagini.model';

import { URL_SERVICIOS } from 'src/app/config/configbackend';

import { map } from 'rxjs/operators';




import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '../service.index';
import { UsuarioService } from 'src/app/services/service.index';




@Injectable({
  providedIn: 'root'
})
export class PaginiService {
     pagini!: Pagini; 
     //usuario!:Usuario;

     urlb!: String;
     urlf!: String;
     
     URL_SERVICIOS!: string;
  constructor(
    public http: HttpClient,
    public router: Router,
    public _usuarioService: UsuarioService,

    public _subirArchivoService: SubirArchivoService,
    

    
    ) {
   // this.cargarStorage();
    //console.log('Servicio de usuario listo');
   }
 
   ngOnInit(): void {
  //  this.URL_SERVICIOS = this.configService.getConfig().URL_SERVICIOS;
  }

  crearPagini(pagini: Pagini){ 
    pagini.usuario = this._usuarioService.usuario;
    let url = URL_SERVICIOS + '/pagin';

    return this.http.post( url , pagini )
    
       .pipe(map((response:any)=>{               
        
          return response.pagini;
          }
         )
        );
  }
 
  
  cargarbackend(){ 
    let url = '/urls';
    return this.http.get(url);
  }


  cargarPagini(ur : String, desde: number = 0){
   let url = ur + '/pagin/desde/?desde=' + desde; 
   //console.log('aquiiii '+url);
  // console.log('aq  '+ URL_SERVICIOS +'/img/paginis/63c1a93d246ec2a38bc42567-682.jpg');
   return this.http.get(url);
                 //.pipe(map((resp:any)=> resp.paginis));
  } 

  abrirurlgif()  {
    let url = URL_SERVICIOS + '/pagini'; 

    return this.http.get(url);
   
   }
 
  cargarPaginis(){
    let url = URL_SERVICIOS + '/pagini'; 
    //console.log('aquiiii '+url);
   // console.log('aq  '+ URL_SERVICIOS +'/img/paginis/63c1a93d246ec2a38bc42567-682.jpg');
    return this.http.get(url);
                  //.pipe(map((resp:any)=> resp.paginis));
   }

   cargarurl(pagini: Pagini){
    let url = URL_SERVICIOS + '/img/paginis/' + pagini.img;

    return this.http.get(url);
   } 

   cargaurl(){
    let url = URL_SERVICIOS + '/pagini/' + this.pagini._id;

    return this.http.get(url);
   } 

   ver(img: any){
    let url = URL_SERVICIOS + '/img/paginis/' + img;    
   // var path = `./uploads/${ tipo }/${ img }`;
   //  this.router.navigate([`/${url}`]); 
    return this.http.get(url);
   
   }


  cargarPagin( id: string ) {
    let url = URL_SERVICIOS + '/pagini/' + id;
    return this.http.get( url )             
              .pipe(map((resp:any)=> resp.paginis));
  }

  guardarPagini( pagini: Pagini ) {

    let url = URL_SERVICIOS + '/pagin';
//console.log('me ves ' + pagini._id)
    if ( pagini._id ) {
      // actualizando
      url += '/' + pagini._id;
     // url += '?token=' + this._usuarioService.token;

      return this.http.put( url, pagini )
      .pipe(map( (resp: any) => {
                  Swal.fire('Nombre Actualizado', pagini.nombreeventopro, 'success');
                  return resp.pagini;
                  }));

    }else {
      // creando
    //  url += '?token=' + this._usuarioService.token;
      return this.http.post( url, pagini )
      .pipe(map( (resp: any) => {
                Swal.fire('Nombre Creado', pagini.nombreeventopro, 'success');
                return resp.pagini;
              }));
    }
  }

  buscarPagini(termino : String){
    //console.log(termino);
   let url = URL_SERVICIOS + '/busqueda/coleccion/paginis/' + termino;
   return this.http.get(url)
         .pipe(map((resp:any)=> resp.paginis));
  }

  borrarPagini( id : any){
    let url = URL_SERVICIOS + '/pagini/' + id;
    
    return this.http.delete(url)
        .pipe(map((resp:any)=> {
          Swal.fire('Pagini Borrado', 'Pagini ha sido borrado correctamente','success');
          return true;
         }));
     }

     actualizarPagini(pagini : Pagini){
      let url = URL_SERVICIOS + '/pagini/' + pagini._id;
     
      return this.http.put(url, pagini)
              .pipe(map((resp:any)=>{
                let paginiDB: Pagini = resp.pagini;
                pagini.nombreeventopro = paginiDB.nombreeventopro;
                pagini.informacion = paginiDB.informacion;
                pagini.detalle = paginiDB.detalle;
                pagini.fecha = paginiDB.fecha;
                pagini.usuario = this._usuarioService.usuario;
                pagini.role = paginiDB.role;
                           
                Swal.fire(' Actualizado ', pagini.nombreeventopro ,'success');
                return true;
              }));

     }


    // cargarC(pagini: Pagini){
     // return pagini.nombreeventopro;
    // }

  
}