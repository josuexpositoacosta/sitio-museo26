import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ImagPipe } from './imag.pipe';
import { CustomDatePipe } from './fecha.pipe';



@NgModule({
  
  imports: [], // CommonModule ]
  declarations: [
    ImagenPipe,
    ImagPipe,
    CustomDatePipe
     
  ],
  exports:[
    ImagenPipe,
    ImagPipe,
    CustomDatePipe
  ]
})
export class PipesModule { }
 