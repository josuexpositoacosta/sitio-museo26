import { Component, OnInit } from '@angular/core';
import { Pagini } from 'src/app/models/pagini.model';
import { Router, RouterModule } from '@angular/router';
import {PaginiService } from 'src/app/services/service.index';
import { ImagPipe } from 'src/app/pipes/imag.pipe';

import { Usuario } from 'src/app/models/usuario.model';

import { loadScripts } from '../dashboard/dashboard.component';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias1',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class Noticias1Component implements OnInit {
  pagini: Pagini = new Pagini('', '',new Usuario('','',''),new Date,'','','','');

  paginis: Pagini[] = [];  
  totalRegistros: number = 0;
  desde: number = 0;

   urlb!: String;
   urlf!: String;

  constructor( 
    public router: Router,
    public _paginiService: PaginiService
  ) { 
    loadScripts();
  //  this.loadScripts();
  }

  ngOnInit(): void {
    this.cargarPagini();
  }

  cargarPagini(){        
    this._paginiService.cargarPaginis()
        .subscribe((resp : any) =>{                    
             this.paginis = resp.paginis;       
        });
  }

  mostarimaPagini(pagini: Pagini){        
    var  pa = pagini.img ;
    var ime = ImagPipe;
    return "p  | imag";
    // this._paginiService.cargarPaginis()
    //     .subscribe((resp : any) =>{                    
    //          this.paginis = resp.paginis;       
    //     });
  }

  irnoti(pagini: Pagini){  
    this._paginiService.pagini = pagini;
    this.router.navigate(['/detalle']);   
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



  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [  
  
      // "src/assets/plugin/lazysizes/lazysizes.min.js",
      // "src/assets/plugin/isotope/jquery.isotope.min.js",
      // "src/assets/plugin/owl.carousel/owl.carousel.min.js",
      // "src/assets/plugin/magnific-popup/jquery.magnific-popup.min.js",

 
      // "src/assets/plugin/vide/jquery.vide.min.js",
      // "src/assets/plugin/vivus/vivus.min.js",

      // "src/assets/js/examples/examples.carousels.js",	
      // "src/assets/js/examples/examples.gallery.js",
      
      // "src/assets/js/theme.js",

      // "src/assets/js/views/view.contact.js",

      // "src/assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js",
      // "src/assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",

      // "src/assets/plugin/circle-flip-slideshow/js/jquery.flipshow.min.js",


      // "src/assets/js/custom.js",

      "src/assets/js/theme.init.js",


      // "src/assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js",
      // "src/assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",                 
   


      // "src/assets/js/demos/demo-wedding.js",
      // "src/assets/js/demos/demo-construction-2.js",
      // "src/assets/js/demos/demo-photography.js"        
        
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
