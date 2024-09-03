import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { URL_SERVICIOS } from 'src/app/config/configbackend';

import { map } from 'rxjs/operators';


import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '../service.index';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
     usuario!: Usuario; 
     token!: string;  
 
  constructor(
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService 
    ) {
    this.cargarStorage();
    //console.log('Servicio de usuario listo');
   }

   estaLogeado(){
      return (this.token.length > 5) ? true: false ;
   }


   esAnonimo(): boolean {
    return !this.usuario._id;
  }

  asignarUsuario(valor: Usuario) {
    this.usuario = valor;
  }

   cargarStorage(){
      if(localStorage.getItem('token')){
        this.token = localStorage.getItem('token') as string;
        this.usuario = JSON.parse(localStorage.getItem('usuario')!);
      }else{
        this.token = '';
        this.usuario = null! ; 
      }
   }

   guardarStorage(id: any, token:string, usuario: Usuario){
     localStorage.setItem('id', id);
     localStorage.setItem('token', token);
     localStorage.setItem('usuario', JSON.stringify(usuario));

     this.usuario = usuario;
     this.token = token;
   }
 
    logout(){
      this.token = '';
      this.usuario = new Usuario("","",""); 
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      this.router.navigate(['/dashboard']);
      localStorage.clear();
    }

    loginGoogle(token: string){
      let url = URL_SERVICIOS + '/login/google'
      return this.http.post( url, {token})
                   .pipe(map((resp: any) =>{
                      this.guardarStorage(resp.id, resp.token,resp.usuario);
                      return true;
                   }));
    }

   login(usuario: Usuario, recordar: boolean = false){
     if(recordar){
        localStorage.setItem('email', usuario.email);
     }else{
         localStorage.removeItem('email');
     }
     let url = URL_SERVICIOS + '/login';
     return this.http.post(url, usuario)
         .pipe(map((resp: any) =>{
            localStorage.setItem('id', resp.id);
            localStorage.setItem('token', resp.token);
            localStorage.setItem('usuario', JSON.stringify(resp.usuario));
          return true;
         }));    
  }

  crearUsuario(usuario: Usuario){ 
    let url = URL_SERVICIOS + '/usuario';

    return this.http.post( url , usuario )
    
       .pipe(map((response:any)=>{               
        
          return response.usuario;
        }
        )
        );
  }

  cambiarImagen( archivo: File, id: string ) {

    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
          .then( (resp: any) => {

            this.usuario.img = resp.usuario.img;
            Swal.fire( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            this.guardarStorage( id, this.token, this.usuario );

          })
          .catch( resp => {
            console.log( resp );
          }) ;

  }


  cargarUsuarios(desde: number = 0){
   let url = URL_SERVICIOS + '/usuario?desde=' + desde;
   return this.http.get(url);
  }




  buscarUsuario(termino : String){
    //console.log(termino);
   let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
   return this.http.get(url)
         .pipe(map((resp:any)=> resp.usuarios)
         );
  }

  borrarUsuario( id : any){
    let url = URL_SERVICIOS + '/usuario/' + id;
    url += '?token' + this.token;
    return this.http.delete(url)
        .pipe(map((resp:any)=> {
          Swal.fire('Usuario Borrado', 'El Usuario ha sido borrado correctamente','success');
          return true;
         }));
     }

     actualizarUsuario(usuario : Usuario){
      let url = URL_SERVICIOS + '/usuario/' + usuario._id;
     // url += '?token' + this.token;


      return this.http.put(url, usuario)
              .pipe(map((resp:any)=>{
                if(usuario._id === this.usuario._id){
                   let usuarioDB: Usuario = resp.usuario;
                   this.guardarStorage(!usuarioDB._id, this.token, usuarioDB);                  
                }                
                Swal.fire('Usuario Actualizado', usuario.nombre ,'success');
                return true;
              }));
     }



    
  


  
}