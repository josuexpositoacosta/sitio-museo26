import { Component, OnInit } from '@angular/core';
import { Pagini } from 'src/app/models/pagini.model';
import {PaginiService } from 'src/app/services/service.index';
import { Router } from '@angular/router';

import { loadScripts } from '../dashboard/dashboard.component';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticiasdetalles',
  templateUrl: './noticiasdetalles.component.html',
  styleUrls: ['./noticiasdetalles.component.css']
})
export class NoticiasdetallesComponent implements OnInit {
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
    //this.loadScripts();
  }

  ngOnInit(): void {
   // this.cargarbackend();
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

  irnoti(){  
    //this._paginiService.pagini = pagini;
    this.router.navigate(['/noticias']);   
  }

  cargaPaginis(pagini: Pagini){
    this._paginiService.pagini = pagini;
    this._paginiService.cargaurl()
        .subscribe((resp : any) =>{                    
             this.paginis = resp.paginis;
   
        }); 
  }


  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [  
  
      //'assets/plugin/jquery/jquery.min.js',
  
     // 'assets/plugin/jquery.appear/jquery.appear.min.js',
  
  //    'assets/plugin/jquery.easing/jquery.easing.min.js',
    //  'assets/plugin/jquery.cookie/jquery.cookie.min.js',
  
  
      //'node_modules/popper.js/dist/umd/popper.min.js',
      //'assets/plugin/bootstrap/js/bootstrap.bundle.min.js',
  
      //'assets/plugin/jquery.validation/jquery.validate.min.js',
  
    //  'assets/plugin/lazysizes/lazysizes.min.js',
     // 'assets/plugin/isotope/jquery.isotope.min.js',
     // 'assets/plugin/owl.carousel/owl.carousel.min.js',
      //'assets/plugin/magnific-popup/jquery.magnific-popup.min.js',
     // 'assets/plugin/vide/jquery.vide.min.js',
     // 'assets/plugin/vivus/vivus.min.js',
  
     // 'assets/js/theme.js',     
      
     // 'assets/js/views/view.contact.js',
  
     // 'assets/js/custom.js',
  
    'assets/js/theme.init.js'
  
        
        
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
