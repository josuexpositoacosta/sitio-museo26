import { Component, OnInit } from '@angular/core';
import { Pagini } from 'src/app/models/pagini.model';

import {PaginiService } from 'src/app/services/service.index';

import { loadScripts } from '../dashboard/dashboard.component';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sala5',
  templateUrl: './sala5.component.html',
  styleUrls: ['./sala5.component.css']
})
export class Sala5Component implements OnInit {
  paginis: Pagini[] = [];   
  urlb!: String;
  urlf!: String;

  constructor(
    public _paginiService: PaginiService,
    private http: HttpClient
  ) {
    loadScripts(); 
    //this.loadScripts();
   }

  ngOnInit(): void {
   // this.cargarbackend();
    this.cargarPagini();
  }


  cargarbackend(){    
    this.http.get('/urls').subscribe((data: any) => {
       this.urlb = data.URL_BACKEND;
   }); 
  }


  cargarPagini(){        
    this._paginiService.cargarPaginis()
        .subscribe((resp : any) =>{                    
             this.paginis = resp.paginis;
   
        });
  }
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [  
  
      // "assets/plugin/modernizr/modernizr.min.js",

      // "assets/plugin/jquery/jquery.min.js",

      // "assets/plugin/jquery.appear/jquery.appear.min.js",

      // "assets/plugin/jquery.easing/jquery.easing.min.js",

      // "assets/plugin/jquery.cookie/jquery.cookie.min.js",

      // "assets/plugin/bootstrap/js/bootstrap.bundle.min.js",

      // "assets/plugin/jquery.validation/jquery.validate.min.js",



      "assets/plugin/lazysizes/lazysizes.min.js",
      "assets/plugin/isotope/jquery.isotope.min.js",
      "assets/plugin/owl.carousel/owl.carousel.min.js",
       "assets/plugin/magnific-popup/jquery.magnific-popup.min.js",


      "assets/plugin/vide/jquery.vide.min.js",
      "assets/plugin/vivus/vivus.min.js",

      "assets/js/examples/examples.carousels.js",
      "assets/js/examples/examples.gallery.js",

     "assets/js/theme.js",

     "assets/js/views/view.contact.js",

     "assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js",
     "assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",

     "assets/plugin/circle-flip-slideshow/js/jquery.flipshow.min.js",


     "assets/js/custom.js",

     "assets/js/theme.init.js",


     "assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js",
     "assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",



     "assets/js/demos/demo-wedding.js",
     "assets/js/demos/demo-construction-2.js",
     "assets/js/demos/demo-photography.js",


     "assets/js/jea.js",

     "assets/js/video.js"    

        
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
