import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { GalleryComponent } from './gallery/gallery.component';

//import { MaterialModule } from '../material.module';
//import { GalleryModalComponent } from './gallery-modal/gallery-modal.component';

@NgModule({
  declarations: [
  //  GalleryComponent,    
   // GalleryModalComponent 
  ],
  exports:[
  //  GalleryComponent,    
   // GalleryModalComponent
  ],
  imports: [
    CommonModule,
   // MaterialModule
  ]
})
export class CompntsModule { }
