import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {

  constructor() {
    this.loadScripts();
   }

  ngOnInit(): void {
  }


// Method to dynamically load JavaScript
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
