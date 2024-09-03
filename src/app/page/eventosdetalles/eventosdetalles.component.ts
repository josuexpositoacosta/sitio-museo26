import { Component, OnInit } from '@angular/core';
import { Pagini } from 'src/app/models/pagini.model';
import {PaginiService } from 'src/app/services/service.index';
import { Router } from '@angular/router';

import { loadScripts } from '../dashboard/dashboard.component';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventosdetalles',
  templateUrl: './eventosdetalles.component.html' 
})
export class EventosdetallesComponent implements OnInit {
  paginis: Pagini[] = []; 
  pagini!: Pagini; 
  urlb!: String;
  urlf!: String;
  constructor( 
    public router: Router,
     public _paginiService: PaginiService,
     private http: HttpClient
  ) {
    loadScripts();
   //  this.loadScripts();
   }

  ngOnInit(): void {
  //  this.cargarbackend();
    this.pagini =  this._paginiService.pagini; 
    this.cargarPaginis();  
  }
 

  cargarbackend(){    
    this.http.get('/urls').subscribe((data: any) => {
       this.urlb = data.URL_BACKEND;
   }); 
  }


  cargarPaginis(){
    this._paginiService.cargarPaginis()
        .subscribe((resp : any) =>{                    
             this.paginis = resp.paginis;
   
        }); 
  } 

  ir(pagini: Pagini){  
    this._paginiService.pagini = pagini;
    this.router.navigate(['/eventos']);   
  } 

  ver(img: any){
    this._paginiService.ver(img)
        .subscribe((resp : any) =>{                    
             this.paginis = resp.paginis;
   
        }); 
  }

  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [  
  
      /*
      "src/assets/plugin/modernizr/modernizr.min.js",

      "src/assets/plugin/jquery/jquery.min.js",
      
      "src/assets/plugin/jquery.appear/jquery.appear.min.js",

      "src/assets/plugin/jquery.easing/jquery.easing.min.js",

      "src/assets/plugin/jquery.cookie/jquery.cookie.min.js",

      "src/assets/plugin/bootstrap/js/bootstrap.bundle.min.js",

      "src/assets/plugin/jquery.validation/jquery.validate.min.js",
*/
                                

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
      //  "src/assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",

      //  "src/assets/plugin/circle-flip-slideshow/js/jquery.flipshow.min.js",


      //  "src/assets/js/custom.js",

     

      'assets/js/theme.init.js',
      


       'assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js',
       'assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js',     
 

       'assets/js/demos/demo-wedding.js',
       'assets/js/demos/demo-construction-2.js',
      'src/assets/js/demos/demo-photography.js',
  
      'assets/js/video.js',
        
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
