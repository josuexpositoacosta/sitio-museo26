import { Component, OnInit } from '@angular/core';
import { Pagini } from '../../models/pagini.model';

import { NgForm } from '@angular/forms';


import { PaginiService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-pagini',
  templateUrl: './pagini.component.html',
  styles: []
})
export class PaginiComponent implements OnInit {

 // hospitales: Hospital[] = [];
  pagini: Pagini = new Pagini('', '',new Usuario('','',''),new Date,'','','','');
 // hospital: Hospital = new Hospital('');

  constructor(
    public _paginiService: PaginiService,
   // public _hospitalService: HospitalService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public _modalUploadService: ModalUploadService
  ) {

    activatedRoute.params.subscribe( params => {

      let id = params['id'];

      if ( id !== 'nuevo' ) {
        this.cargarPagini( id );
      }

    });

  }

  ngOnInit() {

  //  this._hospitalService.cargarHospitales()
     //     .subscribe( hospitales => this.hospitales = hospitales );

    this._modalUploadService.notificacion
          .subscribe( resp => {
            this.pagini.img = resp.medico.img;
          });

  }

  cargarPagini( id: string ) {
    this._paginiService.cargarPagin( id )
          .subscribe( pagini => {

            console.log( pagini );
            this.pagini = pagini;
            //this.pagini.hospital = pagini.hospital._id;
            //this.cambioHospital( this.medico.hospital );
          });
  }

  guardarPagini( f: NgForm ) { 
    console.log( f.valid );
    console.log( f.value );
    if ( f.invalid ) {
      return;
    }
    this._paginiService.guardarPagini( this.pagini )
            .subscribe( pagini => {
              this.pagini._id = pagini._id;
              this.router.navigate(['/pagini', pagini._id ]);
            });

  }

 // cambioHospital( id: string ) {
  //  this._hospitalService.obtenerHospital( id )
 //         .subscribe( hospital => this.hospital = hospital );
//  }

//  cambiarFoto() {
  // this._modalUploadService.mostrarModal( 'medicos', this.medico._id );
 // }


}
