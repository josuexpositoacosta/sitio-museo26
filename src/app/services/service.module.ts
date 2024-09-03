import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardService,
  SubirArchivoService,
  VisitaService
 } from './service.index';
import { UploadService } from './upload/upload.service';
import { GalleryService } from './gallery/gallery.service';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardService,
    SubirArchivoService,
    ModalUploadService,
    UploadService,
    GalleryService,
    VisitaService
  ],
  declarations: []
})
export class ServiceModule { }
