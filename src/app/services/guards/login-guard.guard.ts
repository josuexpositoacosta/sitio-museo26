import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

import { Usuario } from 'src/app/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }


  canActivate() {
    if (this._usuarioService.estaLogeado()) {
      //console.log('PASO POR EL GUARD');
      return true;
    } else {
      //console.log('Bloqueado por el Guard');
      // Aquí puedes verificar si el usuario es anónimo o no
      // Por ejemplo, si tienes una propiedad en el servicio de usuario que indique si es anónimo o no:
          this.asignarUsuario();
      if (this._usuarioService.esAnonimo()) {
        return true; // Permite el acceso a las páginas
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }

  asignarUsuario() {
    var usuario: Usuario = new Usuario('museo', 'museo@museo26.com', 'museo26');
    this._usuarioService.asignarUsuario(usuario);
  }

  // canActivate(){
  //   if(this._usuarioService.estaLogeado()){
  //      console.log('PASO POR EL GUARD');
  //     return true; 
  //   }else{
  //     console.log('Bloquedo por el Guard');
  //     this.router.navigate(['/login']);
  //     return false;
  //   }     
  //  // return true;   
  //  }
 
}
