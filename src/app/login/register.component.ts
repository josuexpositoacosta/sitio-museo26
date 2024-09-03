
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';



import { Usuario } from '../models/usuario.model';


import { UsuarioService } from '../services/service.index';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['login.component.css']
})

export class RegisterComponent implements OnInit {  
  
  form: any = {};
  private usuario: any = {};
  isRegister = false;
  isRegisterFail = false;
  errorMsg = '';



  constructor( 
    public _usuarioService: UsuarioService, 
    public router: Router
  ) {
    //  if(!localStorage.getItem('token')){
    
     //   this.router.navigate(['/login']);      
    //  }

   }


  
  ngOnInit() { 
    

   /* this.form.setValue({
      nombre: 'test',
      email: 'test@test.com',
      password:'123456'    
    });*/
  }

  onRegister() {
   // this.usuario = new Usuario(this.form.nombre, this.form.email, this.form.password);
   let usuario = new Usuario(
    this.form.nombre, 
    this.form.email,
    this.form.password
  ); 
  
    this._usuarioService.crearUsuario(usuario)   
    .subscribe(data => {
      this.isRegister = true;
      this.isRegisterFail = false;
      this.router.navigate(['/login'])
    },
      (error: any) => {
        console.log(error.error.mensaje);
        this.errorMsg = error.error.mensaje;
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );
  }

  refresh(): void {
    window.addEventListener( 'hashchange', event => {
      console.log( `estoy en pagina: ${ window.location.hash }` )
      console.log( `carge pagina: ${ window.location.reload() }` )
     
     // this.loadScripts(); 
     // this.reloadComponent();
    }) ;
  }

}
