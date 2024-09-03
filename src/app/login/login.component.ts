import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

//declare function init_plugins():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '' ;
  recuerdame: boolean = false;

  constructor(
     public router: Router,
     public _usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
   // init_plugins();
    this.email = localStorage.getItem('email') || '';
    if(this.email.length > 1){
       this.recuerdame = true;
    }
  }

  ingresar(forma:NgForm){ 
       //console.log(forma.valid);
       if(!forma.valid){
         return; 
       } 
      
      let usuario = new Usuario('', forma.value.email, forma.value.password);
      this._usuarioService.login( usuario, forma.value.recuerdame )
                .subscribe(correcto => this.router.navigate(['usuarios']));     
      //console.log(forma.value);
      
 
    //console.log('Ingresando');

    //this.router.navigate(['/dashboard']);
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


