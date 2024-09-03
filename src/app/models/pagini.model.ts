import { Time } from "@angular/common";
import { Usuario } from './usuario.model';


export class Pagini{
    constructor(
      public  nombreeventopro: string,
      public  informacion: string, 
      public  usuario?: Usuario,  
      public  fecha?: Date,  
    //  public  hora?: Time,  
      public  detalle?: string,   
      public  img?: string | any, 
      public  role?: string,    
      public _id?: string | any   
    ){
    } 
}
