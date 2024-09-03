import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/configbackend';
 
@Pipe({
  name: 'imagen'   
})
export class ImagenPipe implements PipeTransform {

  transform( img: string , tipo:string = 'usuario' ): any {
 
    var url = URL_SERVICIOS + '/img'; 
   // console.log( 'usuario aqui ' + img);

    if( !img ){ 
         return url + '/usuarios/xxx';
    }

    if( img.indexOf('https') >= 0 ){      
      return img;
    }

    switch(tipo){
      case 'usuario':
         url += '/usuarios/' + img;
        break;
      case 'medico':
         url += '/medicos/' + img;
        break;
      case 'hospital':
         url += '/hospital/' + img;
          break;  
      case 'imagenes':
         url += '/imagenes/' + img;
          break; 
          
      case 'pagini':
         url += '/paginis/' + img;
        break;

      default:
         console.log('tipo de imagen no existe, usuarios, medicos, hospitales, imagenes, paginis'); 
         url += '/usuarios/xxx';
    }

    return  url;// 'FUNCIONA';
  }

}
