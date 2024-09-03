import { Component, OnInit } from '@angular/core';
import { Archivo } from 'src/app/models/archivo.model';
import { SubirArchivoService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';
import { ModalUploadService } from './modal-upload.service';

//import { Pipe, PipeTransform } from '@angular/core'

//@Pipe({ name: 'convertToSpaces' })

@Component({  
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
 // styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {
  imagenSubir: File | any = null;
  imagenTemp: string | any = null;
 

 
  pic!: File | any;
  public archivo!: Archivo;
  public lastPK!: number;

  constructor(
    public _subirArchivoService: SubirArchivoService,
    public _modalUploadService: ModalUploadService,
   
  ) { 
   // console.log('Modal Listo tu sabes -----');
  }
  ngOnInit(): void {
  }


 // subirArchivo(archivo: Archivo) {
 //   this._service.uploadFile(this.archivo).subscribe(Response => {});
  //  }
    
  /*  fileEvent(fileInput: Event) {
      let target = fileInput.target as HTMLInputElement;
      let file : File = target.files as unknown as  File;
     // let file = archivo.files[0];
   
     console.log(file.type);
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
     this.archivo = new Archivo(this.lastPK + 1, file.name, file.type);
     console.log(file);
     this.imagenSubir = file;
     }
    }
*/

  setDefaultPic() {
    this.pic = "../assets/images/my-image.png";
  }

  cerrarModal() { 
    this.imagenTemp = null;
   
    this.imagenSubir = null;
   

    this._modalUploadService.ocultarModal();
  }

  onSelectFile(event : Event) {
    let reader = new FileReader();
    const target = event.target as HTMLInputElement;
    const archivo = target.files as unknown as File;
   
    console.log(this.pic);
    reader.onloadend = function(){
      let output: any = document.getElementById('pic');
      output.src = reader.result;
    }
  
    console.log(archivo);
    if(archivo){
      reader.readAsDataURL(archivo);
    }
    
}


 seleccionImage(event: Event){
     this.imagenTemp = null;   
     var element = event.currentTarget as HTMLInputElement;
     var file: File | any  = element.files;

     var archivo: (File) | any  = file.item(0);   
    
    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }
 
   /*if (archivo.type.indexOf('image') < 0 ) {
      Swal.fire('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }*/

    this.imagenSubir = archivo; 
   // console.log("imagenSubir ", this.imagenSubir);
    //console.log(" tipo  ",  this._modalUploadService.tipo);   
    //console.log(" id  ",  this._modalUploadService.id);   


    let reader =  new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;

  }  

  subirImagen() {

    this._subirArchivoService.subirArchivo( this.imagenSubir , this._modalUploadService.tipo, this._modalUploadService.id )
          .then( resp => {

            this._modalUploadService.notificacion.emit( resp );
            this.cerrarModal();

          })
          .catch( err => {
            console.log( 'Error en la carga... ');
          });

  }

  

}
