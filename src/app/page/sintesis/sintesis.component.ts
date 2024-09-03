import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sintesis',
  templateUrl: './sintesis.component.html',
  styles: [
  ]
})
export class SintesisComponent implements OnInit {

  constructor() { 
    this.loadScripts();
  }

  ngOnInit(): void {
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
