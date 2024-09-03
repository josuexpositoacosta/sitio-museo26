import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boveda',
  templateUrl: './boveda.component.html',
  styles: [
  ]
})
export class BovedaComponent implements OnInit {

  constructor() {
    this.loadScripts();
   }

  ngOnInit(): void {
  }


  loadScripts() {
 
    // This array contains all the files/CDNs
    const dynamicScripts = [      
       'assets/js/carousel.js'
    ];
   
     for (let i = 0; i < dynamicScripts.length; i++) {
       const node = document.createElement('script');
       node.src = dynamicScripts[i];
       node.type = 'text/javascript';
       node.async = false;
       document.getElementsByTagName('head')[0].appendChild(node);
     }  
 }

  refresh(): void {
    window.addEventListener( 'hashchange', event => {
      console.log( `estoy en pagina: ${ window.location.hash }` )
      console.log( `carge pagina: ${ window.location.reload() }` )
    }) ;
   } 
}
