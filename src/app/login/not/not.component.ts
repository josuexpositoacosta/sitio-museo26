import { Component, OnInit } from '@angular/core';

import {PaginiService, SidebarService, UsuarioService } from 'src/app/services/service.index';


import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';


import { Pagini } from 'src/app/models/pagini.model';

import Swal from 'sweetalert2';

import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-not',
  templateUrl: './not.component.html',
 
})
export class NotComponent implements OnInit {
  pagini: Pagini = new Pagini('', '',new Usuario('','',''),new Date,'','','','');
  paginis: Pagini[] = []; 
  usuarios: Usuario[] = []; 
  desde: number = 0;
  c: number = 0;
  totalRegistros: number = 0;
 // total: number = 0;
  cargando : boolean = true; 

  form: any = {};
  private pagininuevo: any = {};
  isRegister = false;
  isRegisterFail = false;
  errorMsg = '';

  urlb!: String;
  urlf!: String;

  constructor(
    public _sidebar : SidebarService, 
    public _usuarioService: UsuarioService,
   
    public _modalUploadService: ModalUploadService, 
    public _paginiService: PaginiService, 
   
    public router: Router,

    private http: HttpClient

  ) {
    if(!localStorage.getItem('token')){
          this.router.navigate(['/login']);      
    }
    
   }
   
  ngOnInit(): void {  
    this.cargarbackend();
    this.cargarPagini();    

    this._modalUploadService.notificacion
           .subscribe(resp => this.cargarPagini() ); 
  }


  cargarbackend(){    
    this.http.get('/urls').subscribe((data: any) => {
       this.urlb = data.URL_BACKEND;
   }); 
  }

mostrarModal( id: string ){
  this._modalUploadService.mostrarModal('paginis', id);
}

mostraModal(){
  this._modalUploadService.mostraModal();
}
 
onRegister() {  
    let pagini = new Pagini(
     this.form.nombreeventopro, //= "Eventi Cientifico Juan Almeida In Memoriam", 
     this.form.informacion,      //= "Actividades realisadas. Eventos y Activdades Culturales"   
    
     //this.form.role
    ); 

    this._paginiService.crearPagini(pagini)   
    .subscribe(data => {
      this.isRegister = true;
      this.isRegisterFail = false;
      this.form.nombreeventopro = ""; 
     this.form.informacion = "";    
      this.cargarPagini();
     // this.router.navigate(['/pagini'])
    },
      (error: any) => {
        console.log(error.error.mensaje);
        this.errorMsg = error.error.mensaje;
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );

  }
  
  cargarPagini(){
    this.cargando = true;  
    this._paginiService.cargarPagini(this.urlb, this.desde)
        .subscribe((resp : any ) =>{  
           //this.form.nombreeventopro = resp.nombreeventopro;
          // this.form.informacion = resp.informacion; 
          // this.form.detalle = resp.detalle;
          // this.form.fecha = resp.fecha;
          // this.form.role = resp.role;   
            // this.total = resp.total;
             this.totalRegistros = resp.total;
             this.paginis = resp.paginis;
             this.cargando = false;              
        });
  }

  inc(){  
     this.c += 1;
     console.log(this.c);
    return this.c;
  }

  incremento(){  
    let inc = this.c;
    inc ++;
   
   if(inc >= 5){
      this.c += 1; 
      inc = this.c; 
   }  else      
        this.c = inc;

    return inc;
 }
  
  cambiardesde(valor : number){
     let desde = this.desde + valor;  

  // console.log('desde '+ this.desde);
 //  console.log('totalRegistros '+ this.totalRegistros);
 //  console.log('valor '+ valor);
  
     if(desde >= this.totalRegistros){
      return;
     }
     if(desde < 0){
      return;
     }

     this.desde += valor;
     if( valor == 0 ){
      this.desde = 0;
     }
     
     this.cargarPagini();
  }

  ultimodesde(valor : number){
    let desde = this.desde + valor;
    let t = this.totalRegistros ;
    let  resto = valor % 5;

  console.log('desde '+ this.desde);
  console.log('totalRegistros '+ this.totalRegistros);
  console.log('valor '+ valor);
  console.log('resto '+ resto);
    if(desde >= this.totalRegistros){
     return;
    }
    if(desde < 0){
     return;
    }  
  
    if( (resto) == 0 ){    
         this.desde = t - 4;
         console.log('desde aqui 1 '+ this.desde);
       }
       else{
         if((resto) != 0 ){
          this.desde = t - 5;
         console.log('desde aqui 2  '+ this.desde);
       }
     }
    this.cargarPagini();
 }



  buscarPagini(termino : String){
    console.log(termino);
    if(termino.length <= 0){
       this.cargarPagini();
       return;
    }
    this.cargando = true;
     this._paginiService.buscarPagini(termino)
                     .subscribe((paginis : Pagini[] ) => {
                       this.paginis = paginis;                     
                      this.cargando = false;
                     });
   }


   borrarPagini( pagini : Pagini){    
   // if(pagini._id === this._paginiService.pagini._id){
    //  Swal.fire('No puede borrar pagini','No se puede borrar asi mismo','error')
    //  return;
   // }  
  
    Swal.fire({
      icon: 'success',
      title: 'Esta seguro?',
      text: 'Esta a punto de borrar a: '+ pagini.nombreeventopro,
      footer: '<a href="javascript:;">Responderemos si es poible...</a>',
      timer: 3000,
      timerProgressBar: true
    })
    .then((borrar : any) => {
      if(borrar){
        this._paginiService.borrarPagini(pagini._id)
              .subscribe(borrado => {
                console.log(borrado);
                this.cargarPagini();
              });
      }
    });
 }

 guardarPaginis( pagini : Pagini){   
   pagini.nombreeventopro = this.form.nombreeventopro;
   pagini.informacion = this.form.informacion; 
   pagini.detalle = this.form.detalle;
   pagini.fecha = this.form.fecha;
   pagini.usuario = this._usuarioService.usuario;
   pagini.role = this.form.role; 
    this._paginiService.actualizarPagini(pagini)
            .subscribe(actualizado => {
                console.log(actualizado);
                this.form.nombreeventopro = "";
                this.form.informacion = "";
                this.form.detalle = "";
                this.form.fecha = "";               
                this.form.role = ""; 
                this.cargarPagini();
               });     
 }


 guardarPagini( f: NgForm ) {
  console.log( f.valid );
  console.log( f.value );

  if ( f.invalid ) {
    return;
  }

  this._paginiService.guardarPagini( this.pagini )
          .subscribe( pagini => {
            this.pagini._id = pagini._id;
            //this.cargarPagini();
            this.router.navigate(['/pagin', pagini._id ]);
          });

}






}
