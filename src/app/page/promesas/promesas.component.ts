import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 
 
    this.contar3(). then(
     mensaje => console.log('Termino!', mensaje)
     //() => console.log('Termino!')
   )
   .catch(error => console.error('Error en la promesa', error));

   }

  ngOnInit(): void {
  }

  contar3(): Promise <boolean> {
    //let promesa = 
    return new Promise((resolve, reject) => {
      let contador = 0;

    let intervalo = setInterval(() => {
          contador += 1;
          console.log(contador);       
          if(contador === 3){
              resolve(true);
              // reject('simple error');
               clearInterval(intervalo);
          }
     }, 1000);
    
    });
  }

}
