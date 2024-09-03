import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router';


//import {  Subscription } from 'rxjs';

import { Pagini } from 'src/app/models/pagini.model';
import { Usuario } from 'src/app/models/usuario.model';

import {PaginiService } from 'src/app/services/service.index';

import * as $ from 'jquery';
 
//import { AfterViewInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
 

//const routes: Routes = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
   
   c!: number;     
   paginis: Pagini[] | any = new Pagini('', '',new Usuario('','',''),new Date,'','','','');
   //paginis: Pagini[] = [];   
   urlb!: String;
   urlf!: String;

  //  ngAfterViewInit() {
  //   // Tu código que utiliza la expresión "#/dashboard" aquí
  //   // Por ejemplo:
  //   var element = $('#dashboard');
  //   // ...
  // } 
 
   ngOnInit(): void {
   // this.cargarbackend();

    this.cargarPagini();


  }
  
  constructor(   
    public router: Router,
    public _paginiService: PaginiService,
    private http: HttpClient,
    

    ) { 
      loadScripts();     
      }  


   //   cC(c: number){  
    //    this.c = c;
     // }
     
      //cargarC(c: number){   
       // var str = null;
        //if(c === 1) {
         // str = this._paginiService.cargarC(this.paginis[this.c]); // this.paginis[this.c].nombreeventopro;            
          //return str;
        //}    
        
       // if(c === 2)     
      //  return this.paginis[this.c].informacion;            
     // }
cargarbackend(){ 
   
  this._paginiService.cargarbackend().subscribe((data: any) => {   
     this.urlb = data.URL_BACKEND;
     console.log( "data: "+ this.urlb);
 }); 
}
   
  abrirurlgif(){   
     
      this._paginiService.abrirurlgif()
            .subscribe((resp : any) =>{                    
                 this.paginis = resp.paginis;
       
            });
     } 
 
      cargarPagini(){        
        this._paginiService.cargarPaginis()
            .subscribe((resp : any) =>{     
                             
                 this.paginis = resp.paginis;       
            });
      }




      
      ir(pagini: Pagini){  
        this._paginiService.pagini = pagini;
        this.router.navigate(['/detalles']);   
      }

      irnoti(pagini: Pagini){  
        this._paginiService.pagini = pagini;
        this.router.navigate(['/detalle']);   
      }
 
 
  

  
}
    // Method to dynamically load JavaScript
  export function  loadScripts(): void {
      // This array contains all the files/CDNs
      const dynamicScripts = [
       
       // "assets/plugin/modernizr/modernizr.min.js",

      //  "assets/plugin/jquery/jquery.min.js",
  
       // "assets/plugin/jquery.appear/jquery.appear.min.js",
  
       // "assets/plugin/jquery.easing/jquery.easing.min.js",
  
      //  "assets/plugin/jquery.cookie/jquery.cookie.min.js",
  
     //  "assets/plugin/bootstrap/js/bootstrap.bundle.min.js",
  
       // "assets/plugin/jquery.validation/jquery.validate.min.js",

 
    
     //"assets/plugin/lazysizes/lazysizes.min.js",
    // "assets/plugin/isotope/jquery.isotope.min.js",

     //"assets/plugin/owl.carousel/owl.carousel.min.js",

     // "assets/plugin/magnific-popup/jquery.magnific-popup.min.js",


    // "assets/plugin/vide/jquery.vide.min.js",
    // "assets/plugin/vivus/vivus.min.js",

  //   "assets/js/examples/examples.carousels.js",
   //  "assets/js/examples/examples.gallery.js",

  //  "assets/js/theme.js",

    //"assets/js/views/view.contact.js",

    //"assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js",
    // "assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",

  //  "assets/plugin/circle-flip-slideshow/js/jquery.flipshow.min.js",


  // "assets/js/custom.js",

   "assets/js/theme.init.js",


    "assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js",
    "assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",



    "assets/js/demos/demo-wedding.js",
    "assets/js/demos/demo-construction-2.js",
    "assets/js/demos/demo-photography.js",


   // "assets/js/jea.js",

   "assets/js/video.js"    

      ];
        

    // if (('.mobile-menu').length <= 12) {

       for (let i = 0; i < dynamicScripts.length; i++) {
         const  node = document.createElement('script');
         node.src = dynamicScripts[i];
         node.type = 'text/javascript';
         node.async = false;

           document.getElementsByTagName('head')[0].appendChild(node);   
        
        }
     

      
  }


