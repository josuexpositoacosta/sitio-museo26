import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagini } from 'src/app/models/pagini.model';

import {PaginiService } from 'src/app/services/service.index';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-museo',
  templateUrl: './museo.component.html',
  styles: [
  ]
})
export class MuseoComponent implements OnInit {
  paginis: Pagini[] = [];  
  urlb!: String;
  urlf!: String;

  constructor(
    public router: Router,
    public _paginiService: PaginiService,
    private http: HttpClient
  ) { 
    this.loadScripts();
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
