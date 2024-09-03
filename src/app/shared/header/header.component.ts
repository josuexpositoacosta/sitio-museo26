import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { SidebarService, UsuarioService } from 'src/app/services/service.index';
import { Usuario } from '../../models/usuario.model';
import { NavigationEnd, NavigationStart, Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
//import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';
import { URL_SERVICIOS_REDMUSEOS } from 'src/app/config/REDMUSEOS';
import { URL_SERVICIOS_SALANAV } from '../../config/SALANAV';
import { URL_SERVICIOS_PASEOVIRTUAL } from 'src/app/config/PASEOVIRTUAL';
import { URL_SERVICIOS_BIBLIOTECAVIRTUAL } from 'src/app/config/BIBLIOTECAVIRTUAL';

import { URL_SERVICIOS_CENTRODOC } from 'src/app/config/CENTRODOC';
import { URL_SERVICIOS_TIENDAVIRTUAL } from 'src/app/config/TIENDAVIRTUAL';
import { URL_SERVICIOS_VENTALIB } from 'src/app/config/VENTALIB';


import { DOCUMENT } from '@angular/common';




declare global {
  interface Window {
    find(searchString: string, options?: FindOptions): boolean;
  }
}

interface FindOptions {
  forward?: boolean;
  matchCase?: boolean;
  wrapAround?: boolean;
  wholeWord?: boolean;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})




export class HeaderComponent implements OnInit {
 // show:boolean = false;

  usuario!: Usuario; 
  public router!: Router;
  public subscriber!: Subscription;
   usu! :String;
   urlr! :String;
   urlsa! :String;
   urlpa! :String;
   urlbi! :String;
   urlti! :String;

   urlce! :String;
   urlve! :String;
   busqueda!:string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
     public _sidebar : SidebarService, 
     public _usuarioService: UsuarioService,
     public _router: Router, public _location: Location
      ) {
       this.usuario = this._usuarioService.usuario;
      
      // this.loadScripts(); 
      // this.reloadComponent();
       }

  ngOnInit(): void { 
    this.usuario = this._usuarioService.usuario;

    this.urlr = URL_SERVICIOS_REDMUSEOS;
    this.urlsa = URL_SERVICIOS_SALANAV;
    this.urlpa = URL_SERVICIOS_PASEOVIRTUAL;
    this.urlbi = URL_SERVICIOS_BIBLIOTECAVIRTUAL;
    this.urlti = URL_SERVICIOS_TIENDAVIRTUAL;   

    this.urlce = URL_SERVICIOS_CENTRODOC;
    this.urlve = URL_SERVICIOS_VENTALIB;  

   // this.buscarEnPagina();
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var scrollPosition = window.pageYOffset;
    var imagen1:any = document.getElementById('logo');
    var imagen2:any = document.getElementById('logo2');

    if (scrollPosition > 100) {
      // Si el usuario ha hecho scroll más allá de cierta posición, muestra la segunda imagen
      imagen1.style.display = 'none';
      imagen2.style.display = 'block';
      imagen2.style.transform = 'scale(0.8)';
    } else {
      // De lo contrario, muestra la primera imagen
      imagen1.style.display = 'block';
      imagen2.style.display = 'none';
      
    }
  }

  cargarUsuario(){    
      if(this.usuario){
         this.usu = this.usuario.nombre;       
         return this.usu;
      }
    return "Nombre de Usuario";
  }

  reloadComponent() {
    /* let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
        console.log('entre reload ');
        */

      /*  window.addEventListener( 'hashchange', event => {
         // console.log( `estoy en pagina: ${ window.location.hash }` )
          console.log( `carge pagina: ${ window.location.reload() }` )
          this.loadScripts(); 
         // this.reloadComponent();
        }) ;     */
        window.location.reload();     
    }

    refresh(): void {
      window.addEventListener( 'hashchange', event => {
        console.log( `estoy en pagina: ${ window.location.hash }` )
        console.log( `carge pagina: ${ window.location.reload() }` )
       
       // this.loadScripts(); 
       // this.reloadComponent();
      }) ;
      

      

     /* this._router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
        const navigation = this._router.getCurrentNavigation();
        tracingService.trace({id: navigation.extras.state.tracingId});
      });**/
     // window.location.reload(); 
    }

    

 /* refresh(): void {  
    this._router.navigateByUrl("", { skipLocationChange: true }).then(() => {
    console.log('entre roorter: ',decodeURI(this._location.path())); 
    this._router.navigate([decodeURI(this._location.path())]);
    });
  }*/

 // toggleCollapse() {
    //this.show = !this.show
 // }

  // Method to dynamically load JavaScript
  loadScripts() {
    // This array contains all the files/CDNs
    const dynamicScripts = [
    /* 'assets/plugin/bootstrap/css/bootstrap.min.css',
      'assets/plugin/fontawesome-free/css/all.min.css',
      'assets/plugin/animate/animate.compat.css',
     'assets/plugin/simple-line-icons/css/simple-line-icons.min.css',
      'assets/plugin/owl.carousel/assets/owl.carousel.min.css',
      'assets/plugin/owl.carousel/assets/owl.theme.default.min.css',
     'assets/plugin/magnific-popup/magnific-popup.min.css',
  
      'assets/css/tmuseo.css',
      'assets/css/theme-elements.css',
      'assets/css/theme-blog.css',
      'assets/css/theme-shop.css',
      'assets/css/nuevo.css',
  
      'assets/plugin/circle-flip-slideshow/css/component.css',
  
      'assets/css/defectomuseo.css',
  
      'assets/css/custom.css',*/



     // 'assets/plugin/modernizr/modernizr.min.js',
      
    // 'assets/plugin/jquery/jquery.min.js',
     // 'assets/plugin/jquery.appear/jquery.appear.min.js',
   //   'assets/plugin/jquery.easing/jquery.easing.min.js',
     // 'assets/plugin/jquery.cookie/jquery.cookie.min.js',
     // 'assets/plugin/bootstrap/js/bootstrap.bundle.min.js',
    //  'assets/plugin/jquery.validation/jquery.validate.min.js',

     // 'assets/plugin/lazysizes/lazysizes.min.js',
     // 'assets/plugin/isotope/jquery.isotope.min.js',
     // 'assets/plugin/owl.carousel/owl.carousel.min.js',
     // 'assets/plugin/magnific-popup/jquery.magnific-popup.min.js',
   //   'assets/plugin/vide/jquery.vide.min.js',
   //  'assets/plugin/vivus/vivus.min.js',
       
      'assets/js/theme.js',
  
    // 'assets/js/views/view.contact.js',
  
   // 'assets/js/custom.js', 
  
      'assets/js/theme.init.js',

      'assets/js/jea.js'

    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        document.getElementsByTagName('head')[0].appendChild(node);
    }
 } 


 buscarEnPagina() {
  // if (this.document.body.innerText.includes(this.busqueda)) {
  //   console.log(`La palabra "${this.busqueda}" se encuentra en la página.`);
  // } else {
  //   console.log(`La palabra "${this.busqueda}" no se encuentra en la página.`);
  // }

  const searchTerm = this.busqueda.toLowerCase();
  const found = window.find(searchTerm);
  if (!found) {
    alert(`No se encontró la palabra "${this.busqueda}" en la página.`);
  }

  
}

agregarEventos() {
  const boton = this.document.getElementById('boton-buscar');
  if (boton) {
    boton.addEventListener('click', () => {
      this.buscarEnPagina();
    });
  }

  const input = this.document.getElementById('input-busqueda');
  if (input) {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.buscarEnPagina();
      }
    });
  }
}
}



 

