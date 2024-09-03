  import { Pipe, PipeTransform } from '@angular/core';

  import { DatePipe } from '@angular/common';  

  @Pipe({

   name: 'customDate'
 
  })

  export class CustomDatePipe extends 

 DatePipe implements PipeTransform {
   de: string = "de";

   override transform(value: any, args?: any): any {
 return super.transform(value, " d, MMMM, y - h:mm  a ");   } }