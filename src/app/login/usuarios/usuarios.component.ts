import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

import { SidebarService, UsuarioService } from 'src/app/services/service.index';


  
declare var swal : any; 

import Swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
    
  ] 
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = []; 
  desde: number = 0;
  totalRegistros: number = 0;
  cargando : boolean = true; 

  constructor(
   public _sidebar : SidebarService, 
   public _usuarioService: UsuarioService,
   public _modalUploadService: ModalUploadService,
   
   public router: Router
  
  // public _DefaultImage: DefaultImage
  ) { 
   if(!localStorage.getItem('token')){
    
         this.router.navigate(['/login']);      
    }
  }

  ngOnInit(): void {
    this.cargarUsuarios();

    this._modalUploadService.notificacion
            .subscribe(resp => this.cargarUsuarios() );           
    } 
    
     
  mostrarModal( id: string ){
     this._modalUploadService.mostrarModal('usuarios', id);
  }
  
  mostraModal(){
    this._modalUploadService.mostraModal();
 }


  cargarUsuarios(){
    this.cargando = true;

    this._usuarioService.cargarUsuarios(this.desde)
        .subscribe((resp : any) =>{ 
             // console.log(resp);
             this.totalRegistros = resp.total;
             this.usuarios = resp.usuarios;
             this.cargando = false;           
        });
  }
 
  cambiardesde(valor : number){
     let desde = this.desde + valor;
     console.log(desde);
     if(desde >= this.totalRegistros){
      return;
     }
     if(desde < 0){
      return;
     }

     this.desde += valor;
     this.cargarUsuarios();
  }


  buscarUsuario(termino : String){
   console.log(termino);
   if(termino.length <= 0){
      this.cargarUsuarios();
      return;
   }
   this.cargando = true;
    this._usuarioService.buscarUsuario(termino)
                    .subscribe((usuarios : Usuario[] ) => {
                      this.usuarios = usuarios;
                     // console.log(usuarios);
                     this.cargando = false;
                    });
  }

  borrarUsuario( usuario : Usuario){
    //console.log(usuario);
    if(usuario._id === this._usuarioService.usuario._id){
      Swal.fire('No puede borrar el usuario','No se puede borrar asi mismo','error')
      return;
    }

    if(usuario.nombre === 'admin'){
      Swal.fire('No puede borrar el usuario','Es el administrador del sistema','error')
      return;
    }
  
    Swal.fire({
      icon: 'success',
      title: 'Esta seguro?',
      text: 'Esta a punto de borra a: '+ usuario.nombre,
      footer: '<a href="javascript:;">Responderemos si es poible...</a>',
      timer: 3000,
      timerProgressBar: true
    })
    .then((borrar : any) => {
      if(borrar){
        this._usuarioService.borrarUsuario(usuario._id)
              .subscribe(borrado => {
                console.log(borrado);
                this.cargarUsuarios();
              });
      }
    });
 }

 guardarUsuario( usuario : Usuario){    
    this._usuarioService.actualizarUsuario(usuario)
           .subscribe();     
 }


  

}
