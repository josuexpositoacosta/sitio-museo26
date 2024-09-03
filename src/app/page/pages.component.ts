import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  public router!: Router;

 constructor() {
    loadScripts();
  // this.loadScripts();

  //  this.loadJS('assets/js/script.js', this.yourCodeToBeCalled, document.body);
   // this.reloadComponent();  
  } 

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
        console.log('entre reload ');
    }

  loadJS = function(url: string, implementationCode: ((this: GlobalEventHandlers, ev: Event) => any) | null, location: HTMLElement){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

     var scriptTag = document.createElement('script');
     scriptTag.src = url;

     scriptTag.onload = implementationCode;
   // scriptTag.onreadystatechange = implementationCode;
     location.removeChild;
     location.appendChild(scriptTag);
    
  };
   yourCodeToBeCalled = function(){
    //your code goes here
  }

  ngOnInit(): void {
    // init_plugins();
  }

}


  // Method to dynamically load JavaScript
  export function  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [  

      // "assets/plugin/modernizr/modernizr.min.js",

      // "assets/plugin/jquery/jquery.min.js",

      // "assets/plugin/jquery.appear/jquery.appear.min.js",

      // "assets/plugin/jquery.easing/jquery.easing.min.js",

      // "assets/plugin/jquery.cookie/jquery.cookie.min.js",

      // "assets/plugin/bootstrap/js/bootstrap.bundle.min.js",

      // "assets/plugin/jquery.validation/jquery.validate.min.js",



      // "assets/plugin/lazysizes/lazysizes.min.js",
      // "assets/plugin/isotope/jquery.isotope.min.js",
      // "assets/plugin/owl.carousel/owl.carousel.min.js",
      //  "assets/plugin/magnific-popup/jquery.magnific-popup.min.js",


      // "assets/plugin/vide/jquery.vide.min.js",
      // "assets/plugin/vivus/vivus.min.js",

   

     "assets/js/theme.js", 

       "assets/js/examples/examples.carousels.js",
       "assets/js/examples/examples.gallery.js",
 
    //  "assets/js/views/view.contact.js",

    //  "assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js",
    //  "assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",

    //  "assets/plugin/circle-flip-slideshow/js/jquery.flipshow.min.js",


    //  "assets/js/custom.js",

      "assets/js/theme.init.js",


      "assets/plugin/rs-plugin/js/jquery.themepunch.tools.min.js",
      "assets/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js",



      "assets/js/demos/demo-wedding.js",
      "assets/js/demos/demo-construction-2.js",
      "assets/js/demos/demo-photography.js",


     "assets/js/jea.js",

     "assets/js/video.js"
    ];
   

     for (let i = 0; i < dynamicScripts.length; i++) { 
       const node = document.createElement('script');
       node.src = dynamicScripts[i];
       node.type = 'text/javascript';
       node.async = false;
       document.getElementsByTagName('head')[0].appendChild(node);
     }
  
 }
   
 

