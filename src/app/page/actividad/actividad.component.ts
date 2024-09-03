import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs';
import {GalleryImage} from '../../models/gallery-image';
import { GalleryService } from 'src/app/services/service.index';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import { filter, map } from 'rxjs/operators';

import { Pagini } from 'src/app/models/pagini.model';
import {PaginiService } from 'src/app/services/service.index';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./gallery.component.scss']

 
})
export class ActividadComponent implements OnInit { //, OnDestroy {
  paginis: Pagini[] = []; 
  desde: number = 0;

  pagini!: Pagini; 
 
  //subscription: Subscription[] = [];
  //columns = 5;
  //gallery: GalleryImage[] = [];
 // src !: String;
  //alt !: String;

  //private galleryImages: GalleryImage[] = [];

  urlb!: String;
  urlf!: String;

  constructor(
    public router: Router,
    public _paginiService: PaginiService,
    private http: HttpClient
  //  public galleryService: GalleryService,
   // public mediaObserver: MediaObserver
  ) { 
      
    this.loadScripts(); 
   // this.createGallery();
    
   }

   ngOnInit(): void {
   // this.cargarbackend(); 
    this.cargarPagini();
   // this.galleryService.createGallery();
   // this.mediaChange();
   // this.getGallery();
  }

  cargarbackend(){    
    this.http.get('/urls').subscribe((data: any) => {
       this.urlb = data.URL_BACKEND;
   }); 
  }

  cargarPagini(){       
    this._paginiService.cargarPagini(this.urlb, this.desde)
        .subscribe((resp : any) =>{                    
             this.paginis = resp.paginis;   
        });
  }
 

  irnoti(pagini: Pagini){  
    this._paginiService.pagini = pagini;
    this.router.navigate(['/detalle']);   
  }

  /* createGallery(): void {
    this.galleryImages = [];
    this.src = `../assets/img/moncada/noticias/eventos/1.jpg`;
    this.alt = `${1}`;
    for (let i = 0; i < 4; i++) {
     
      this.galleryImages.push(
        {
          src: `../assets/img/moncada/noticias/eventos/evento1${i}a.jpg`,
          position: i,
          alt: `${i}`,
          first: (i === 0),
          last: (i === 4)
        });
        
    }
  }*/

  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [    
    'assets/js/theme.init.js',

   // 'assets/js/jquery-1.10.2.min.js',
    //'assets/js/lightbox-2.6.min.js'
        
        
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


 // openDialog(position: number): void {
  //  this.galleryService.selectImage(position);
   // this.dialog.open(GalleryModalComponent, {panelClass: 'custom-dialog-container'});
 // }

  

  /*getGallery(): void {
    this.subscription.push(
      this.galleryService.getGallery().subscribe(gallery => this.gallery = gallery)
    );
  }

  private mediaChange(): void {
    this.subscription.push(
      this.mediaObserver.asObservable()
        .pipe(
          filter((changes: MediaChange[]) => changes.length > 0),
          map((changes: MediaChange[]) => changes[0])
        ).subscribe((change: MediaChange) => {
        switch (change.mqAlias) {
          case 'xs': {
            this.columns = 1;
            break;
          }
          case 'sm': {
            this.columns = 2;
            break;
          }
          case 'md': {
            this.columns = 3;
            break;
          }
          case 'lg': {
            this.columns = 5;
            break;
          }
          default: {
            this.columns = 6;
            break;
          }
        }
      })
    );
  }*/

  //ngOnDestroy(): void {
   // this.subscription.forEach(subscription => subscription.unsubscribe());
 // }



}
