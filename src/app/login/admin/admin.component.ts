import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, SidebarService, UsuarioService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { Archivo } from 'src/app/models/archivo.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/configbackend.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit {
  public archivo!: Archivo;
  public archivosServer!: Archivo | any;
  public lastPK!: number;

  private image:ImageSelected = new ImageSelected;
   
   public url!: string;

  imagenes: Archivo[] = [];

  pic1!: File | any;
  pic2!: File | any;
  pic3!: File | any;
  pic4!: File | any;

  constructor(
    public _sidebar : SidebarService, 
  
    
    public router: Router,
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService,
    private http: HttpClient,
    private _service: ApiService,
  ) {
    if(!localStorage.getItem('token')){
    
      this.router.navigate(['/login']);      
     }
   }

  ngOnInit(): void {

    this._service.getUploads().subscribe(Response => {
      this.archivosServer = Response;
      this.lastPK = this.archivosServer.id //[Response.length – 1].
      });
  }
   

  onUploadFinish(event: any, name: String) {
    console.log(event);
    this.image = new ImageSelected;

    this.image.image = event.src;
    this.image.name = name; //event.file.name;
  }

  sendImage(){    
    let url = URL_SERVICIOS + '/up';
    if(this.image != null){
      console.log('send image');
      Swal.fire('Fichero subido','Imagen Enviada con exito','success')

      this.http.post(url, {
        file: this.image.image,
        name: this.image.name
      }).subscribe((d) => {
        
        console.log(d); 
      },
      (error: any) => {
        console.log(error.error.mensaje);
        Swal.fire('Fichero no subido','Imagen muy grande','error')
      });
    }
  }

  /*sendImage1(){ 
    var fs=require('fs');

    fs.writeFile('./archivo1.txt','línea 1\nLínea 2',function(error:any){
        if (error)
            console.log(error);
        else
           console.log('El archivo fue creado');
    });
    
    console.log('última línea del programa');

  }*/

  mostrarModal(id: string){
    this._modalUploadService.mostrarModal('usuarios', id!);
 }
 
 mostraModal(){
   this._modalUploadService.mostraModal();
}

  menuAd: any = [ 
  
    {
    titulo: 'Mantenimiento de las Páginas',
    icono: 'mdi mdi-folder-lock-open',
    submenu: [       
     { titulo: 'Usuarios', url: '/usuarios' },
     { titulo: 'Autenticarse', url: '/login'},   
     { titulo: 'Galeria', url: '/galeria'}    
    ]
  }
  ];


    //imagenes

    setDefaultPic1() {
      this.pic1 = "../assets/images/slider/slide-1.jpg";
    }
  
    setDefaultPic2() {
      this.pic2 = "../assets/images/slider/slide-2.jpg";
    }
    setDefaultPic3() {
      this.pic3 = "../assets/images/slider/slide-3.jpg";
    }
    setDefaultPic4() {
      this.pic4 = "../assets/images/slider/slide-4.jpg";
    } 



    subirArchivo() {

      this._service.uploadFile(this.archivo).subscribe(Response => {});
      }

}

class ImageSelected {
  public name!: String;
  public image!: String;
}
