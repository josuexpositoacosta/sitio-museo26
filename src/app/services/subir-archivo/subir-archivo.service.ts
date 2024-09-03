import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/configbackend';

@Injectable()
export class SubirArchivoService {

  constructor() { }


  subirArchivo( archivo: File, tipo: string | any, id: string | any ) {

    return new Promise( (resolve, reject ) => {

      var formData = new FormData();
      var xhr = new XMLHttpRequest();  
      
      //  if(tipo == 'pagi'){ 
         formData.append( 'imagen', archivo, archivo.name );
      //  }
      //    else{
     //     formData.append( 'imagen', archivo, archivo.name );
     //  }

      xhr.onreadystatechange = function() {

        if ( xhr.readyState === 4 ) {

          if ( xhr.status === 200 ) {
            console.log( 'Imagen subida' );
            resolve( JSON.parse( xhr.response ) );
          } else {
            console.log( 'Fallo la subida' );
            reject( xhr.response );
          }

        }
      };

      var url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;

      xhr.open('PUT', url, true );
      xhr.send( formData );

    });
  }
  

}
