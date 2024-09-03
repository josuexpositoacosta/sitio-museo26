import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from '../components/galeria/galeria.component';



@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    GaleriaComponent
  ]
})
export class GaleriaModule { }
