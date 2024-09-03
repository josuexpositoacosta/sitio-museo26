import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/service.index';


import { HttpClient } from '@angular/common/http';


//import * as nodemailer from 'nodemailer';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent implements OnInit {
  contacto!: String;

  correo! :String;

  usuarios: Usuario[] = []; 
  desde: number = 0;
  totalRegistros: number = 0;
  cargando : boolean = true; 

  nombreCompleto!: string;
  correoOrigen!: string;
  asunto!: string;
  mensaje!: string;
  servidorCorreo!: string;
  contraseCorreoOrigen!: string;

  constructor(
    public _usuarioService: UsuarioService,
    private http: HttpClient
  ) {
    this.loadScripts();
   } 
 
  ngOnInit(): void {    
    this.cargarUsuarios();
    this.correo = this.usuarios[0]?.email;
   // this.contraseCorreoOrigen = this.usuarios[0]?.password;    
    this.servidorCorreo = 'https://mail.google.com';
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

  enviarCorreo() {
    var correoDestino =   this.usuarios[0]?.email; //'mail@example.com'; // Cambia esto por la dirección de correo destino
    var asunto = encodeURIComponent(this.asunto);
    var mensaje = encodeURIComponent(this.mensaje);
    var nombreCompleto = encodeURIComponent(this.nombreCompleto);
    // var correoOrigen = encodeURIComponent(this.correoOrigen);
    // var servidorCorreo = encodeURIComponent(this.servidorCorreo);
    // var contraseñaCorreoOrigen = encodeURIComponent(this.contraseCorreoOrigen);

  var mailtoUrl = `mailto:${correoDestino}?subject=${asunto}&body=${mensaje}%0D%0A%0D%0A${nombreCompleto}`;  //&cc=${correoOrigen}  //&bcc=${servidorCorreo}&password=${contraseñaCorreoOrigen}`;

  // var mailtoUrl =  `mailto:${correoDestino}?subject=${asunto}&body=${mensaje}%0D%0A%0D%0A${nombreCompleto}`;
 

//window.open(mailtoUrl, "_self");

    
 window.location.href = mailtoUrl;


  // var correo = {
  //   destinatario: this.usuarios[0]?.email, //'correo_destino',
  //   asunto: this.asunto,
  //   mensaje: this.mensaje,
  //   usuario: this.correoOrigen,//'usuario',
  //   contraseña: this.contraseCorreoOrigen//'contraseña'
  // };
  // let url = URL_SERVICIOS + '/correo/enviarCorreo';

  // this.http.post(url, correo)
  //   .subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       // Aquí puedes manejar la respuesta de la API
  //     },
  //     (error: any) => {
  //       console.log(error);
  //       // Aquí puedes manejar el error de la API
  //     }
  //   );


  }


  // enviarCorreo() {
  //   const correoDestino = this.usuarios[0]?.email;
  //   const asunto = (document.querySelector('input[name="asunto"]') as HTMLInputElement).value;
  //   const mensaje = (document.querySelector('textarea[name="mensaje"]') as HTMLTextAreaElement).value;
  //   const correoOrigen = (document.querySelector('input[name="correoOrigen"]') as HTMLInputElement).value;
  //   const nombreCompleto = (document.querySelector('input[name="nombreCompleto"]') as HTMLInputElement).value;
  
  //   const formData = new FormData();
  //   formData.append('correoDestino', correoDestino);
  //   formData.append('asunto', asunto);
  //   formData.append('mensaje', mensaje);
  //   formData.append('correoOrigen', correoOrigen);
  //   formData.append('nombreCompleto', nombreCompleto);
  
  //   this.http.post('php/contact-form.php', formData)
  //     .subscribe(
  //       () => {
  //         console.log('Correo enviado con éxito');
  //       },
  //       (error) => {
  //         console.log('Error al enviar el correo:', error);
  //       }
  //     );
  // }

  // enviarCorreo() {
  //   let url = URL_SERVICIOS_ACTUAL;
  //   const correo = {
  //     to: this.usuarios[0]?.email,
  //     asunto: this.asunto,
  //     mensaje: this.mensaje,
  //     correoOrigen: this.correoOrigen,
  //     nombreCompleto: this.nombreCompleto
  //   };
  
  //   this.http.post('php/contact-form.php', correo).subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  loadScripts(){

    // This array contains all the files/CDNs
    const dynamicScripts = [  
  
    //  'assets/plugin/jquery/jquery.min.js',
  
    //  'assets/plugin/jquery.appear/jquery.appear.min.js',
  
 //     'assets/plugin/jquery.easing/jquery.easing.min.js',
   //   'assets/plugin/jquery.cookie/jquery.cookie.min.js',
  
  
     // 'node_modules/popper.js/dist/umd/popper.min.js',
   //   'assets/plugin/bootstrap/js/bootstrap.bundle.min.js',
  
     // 'assets/plugin/jquery.validation/jquery.validate.min.js',
  
   //   'assets/plugin/lazysizes/lazysizes.min.js',
    // 'assets/plugin/isotope/jquery.isotope.min.js',
   //  'assets/plugin/owl.carousel/owl.carousel.min.js',
    //  'assets/plugin/magnific-popup/jquery.magnific-popup.min.js',
   //   'assets/plugin/vide/jquery.vide.min.js',
    //  'assets/plugin/vivus/vivus.min.js',
  
   //   'assets/js/theme.js',     
      
    //  'assets/js/views/view.contact.js',
  
   //   'assets/js/custom.js',
  
    'assets/js/theme.init.js',

    'assets/js/zoom.js'
  
        
        
    ];
   // if((document.getElementsByTagName('head')[0].nodeValue === null)){
  
     for (let i = 0; i < dynamicScripts.length; i++) { 
       const node = document.createElement('script');
       node.src = dynamicScripts[i];
       node.type = 'text/javascript';
       node.async = false;
       document.getElementsByTagName('head')[0].appendChild(node);
     }
  //}
  }

}
