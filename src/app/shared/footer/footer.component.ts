import { Component, OnInit } from '@angular/core';
import { Centro_Fidel_Castro_Ruz } from 'src/app/config/Centro_Fidel_Castro_Ruz';
import { Consejo_Nacional_Patrimonio_Cultural } from 'src/app/config/Consejo_Nacional_Patrimonio_Cultural';
import { correo } from 'src/app/config/correo';
import { Instituto_de_Historia_de_Cuba } from 'src/app/config/Instituto_de_Historia_de_Cuba';
import { Oficina_del_Historiador_de_La_Habana } from 'src/app/config/Oficina_del_Historiador_de_La_Habana';
import { Portal_Cubarte } from 'src/app/config/Portal_Cubarte';
import { Portal_Gobierno_stgo } from 'src/app/config/Portal_Gobierno_stgo';
import { Union_de_Historiadores_de_Cuba } from 'src/app/config/Union_de_Historiadores_de_Cuba';
import { Universidad_de_Oriente } from 'src/app/config/Universidad_de_Oriente';

import { Usuario } from 'src/app/models/usuario.model';

import { Visita } from 'src/app/models/visita.model';

//import Visita, { IVisita } from 'src/app/models/visita.model';

//const Visit = require('src/app/models/visita.model'); // Reemplaza la ruta con la ubicación correcta de tu modelo Visita

import { UsuarioService, VisitaService } from 'src/app/services/service.index';

import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/configbackend';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  usuarios: Usuario[] = []; 

  visitas: Visita[] = [];

  visitasDiarias!: number;
  visitasSemanales!: number;
  visitasMensuales!: number;
  visitasAnuales!: number;


  urlcfcr! :String;
  urlcnpc! :String;
  urluhc! :String;
  

  urlihc! :String;
  urluo! :String;

  urlpc! :String;
  urlohlh! :String; 


  urlgsc! :String;

  correo! :String;

  email! :String;


  desde: number = 0; 
  totalRegistros: number = 0;
  cargando : boolean = true; 

  contador!: number;

  
  
  constructor(
    private http: HttpClient,
    public _usuarioService: UsuarioService,
    public _visitaService: VisitaService
  ) {
    this.incrementarContador();
   
   

   // this.contarVisitasPorIPSemanales(); 
   } 

  ngOnInit(): void {

    this.urlcfcr = Centro_Fidel_Castro_Ruz;

    this.urlcnpc = Consejo_Nacional_Patrimonio_Cultural;
    this.urluhc = Union_de_Historiadores_de_Cuba;    
    

    this.urlihc = Instituto_de_Historia_de_Cuba;
    this.urluo = Universidad_de_Oriente;
    this.urlpc = Portal_Cubarte;
    this.urlohlh = Oficina_del_Historiador_de_La_Habana;

    this.urlgsc = Portal_Gobierno_stgo;


    this.correo = correo;

    this.cargarUsuarios();
   
    // if (Usuario !== null && Usuario !== undefined) { 
    //   this.email = this.usuarios[0].email;       
    // } 
  //  this.obtenerContador();

  this.obtenerVisitasDiarias();      
  this.obtenerVisitasSemanales(); 
  this.obtenerVisitasMensuales();
  this.obtenerVisitasAnuales();
  }

  cargarUsuarios(){
    this.cargando = true;
    this._usuarioService.cargarUsuarios(this.desde)
        .subscribe((resp : any) =>{ 
             // console.log(resp);
             this.totalRegistros = resp.total;
             this.usuarios = resp.usuarios;
             this.cargando = false;           
        });
  }

  refresh(): void {
    window.addEventListener( 'hashchange', event => {
      console.log( `estoy en pagina: ${ window.location.hash }` )
      console.log( `carge pagina: ${ window.location.reload() }` )
     // this.loadScripts(); 
     // this.reloadComponent();
    }) ;
  }    


  obtenerContador() {
    this._visitaService.obtenerContador()
      .subscribe((resp : any) =>{ 
      //  console.log(resp.visitas);
         this.visitas = resp.visitas; 
         console.log(this.visitas);
      });

     //  this.contador = this.visitas[0].contador;
    //   let url = URL_SERVICIOS;
    //   this.http.get<{ contador: number }>(`${url}'/visitas'`).subscribe(
    //   res => {
    //     this.contador = res.contador;
    //   },
    //   err => {
    //     console.error('Error al obtener el contador de visitas', err);
    //   }
    // );
  }

  incrementarContador() {
   
    let url = URL_SERVICIOS + '/visitas';
    this.http.post
    //<{ contador: number }>
    (url, {}).subscribe(
      res => {
       // this.contador = res.contador;

      },
      err => {
        console.error('Error al incrementar el contador de visitas', err);
      }
    );
  }


  obtenerVisitasDiarias() {
    let url = URL_SERVICIOS + '/visitas/visitasDiarias';
    fetch(url) // Realiza una solicitud GET a tu endpoint
      .then(response => response.json())
      .then(data => {
        this.visitasDiarias = data.visitasDiarias;
      })
      .catch(error => {
        console.error('Error al obtener las visitas diarias', error);
      });
  }


  obtenerVisitasSemanales() {
    this._visitaService.obtenerVisitasSemanales().subscribe(
      (data: any) => {
        this.visitasSemanales = data.visitasSemanales;
      },
      (error: any) => {
        console.error('Error al obtener las visitas semanales', error);
      }
    );
  }


  obtenerVisitasMensuales() {
    this._visitaService.obtenerVisitasMensuales().subscribe(
      (data: any) => {
        this.visitasMensuales = data.visitasMensuales;
      },
      (error: any) => {
        console.error('Error al obtener las visitas mensuales', error);
      }
    );
  }

  obtenerVisitasAnuales() {
    this._visitaService.obtenerVisitasAnuales().subscribe(
      (data: any) => {
        this.visitasAnuales = data.visitasAnuales;
      },
      (error: any) => {
        console.error('Error al obtener las visitas anuales', error);
      }
    );
  }

  
  
    contarVisitasPorIPSemanales() {
    // Obtener la fecha actual
//    this.obtenerContador();

    var fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
   // console.log('fecha por a:', JSON.stringify(fechaActual));
  
    // Obtener la fecha hace una semana
    var fechaHaceUnaSemana = new Date();
    fechaHaceUnaSemana.setDate(fechaActual.getDate() - 7);
    fechaHaceUnaSemana.setHours(0, 0, 0, 0);
   // console.log('fecha hace:', JSON.stringify(fechaHaceUnaSemana));
  
    // Filtrar las visitas en el rango de fechas y agrupar por IP
    var visitasSemanalesPorIP: { [ip: string]: number } = {};

   // console.log(' this.visitas:', JSON.stringify( this.visitas));


    this.visitas.forEach(visita => {
      var fechaVisita = new Date(visita.fecha);
      fechaVisita.setHours(0, 0, 0, 0);

    //  console.log('fecha visita:', JSON.stringify(fechaVisita));
  
      if (fechaVisita >= fechaHaceUnaSemana && fechaVisita <= fechaActual) {
        if (visitasSemanalesPorIP.hasOwnProperty(visita.ip)) {
          visitasSemanalesPorIP[visita.ip];
        } else {
          visitasSemanalesPorIP[visita.ip] = 1;
        }
      }
    });
 // Sumar los valores del objeto visitasSemanalesPorIP
 var totalVisitas = Object.values(visitasSemanalesPorIP).reduce((a, b) => a + b, 0);
  
 // Imprimir el resultado
 //console.log('Visitas de IP por semana:', totalVisitas);
 
    return totalVisitas;    
  }


  // contarVisitasPorIPSemanales() {
  //   // Obtener la fecha actual
  //   var fechaActual = new Date();
  //   fechaActual.setHours(0, 0, 0, 0);
  
  //   // Obtener la fecha hace una semana
  //   var fechaHaceUnaSemana = new Date();
  //   fechaHaceUnaSemana.setDate(fechaActual.getDate() - 7);
  //   fechaHaceUnaSemana.setHours(0, 0, 0, 0);
  
  //   // Filtrar las visitas en el rango de fechas y agrupar por IP
  //   var visitasSemanalesPorIP: { [ip: string]: number } = {};
  //   this.visitas.forEach(visita => {
  //     var fechaVisita = new Date(visita.fecha);
  //     console.log('Visitas semana:', visita.fecha);
  //     fechaVisita.setHours(0, 0, 0, 0);
  
  //     if (fechaVisita >= fechaHaceUnaSemana && fechaVisita <= fechaActual) {
  //       if (visitasSemanalesPorIP[visita.ip]) {
  //         visitasSemanalesPorIP[visita.ip]++;
  //       } else {
  //         visitasSemanalesPorIP[visita.ip] = 1;
  //       }
  //     }
  //   });
  
  //   // Imprimir el resultado
  //   //console.log('Visitas de IP por semana:', visitasSemanalesPorIP);
  //   console.log('Visitas de IP por semana:', JSON.stringify(visitasSemanalesPorIP)) 
  // }
 



  // contarVisitasSemanales() {
  //   // Obtener la fecha actual
  //   var fechaActual = new Date();
  
  //   // Obtener la fecha hace una semana
  //   var fechaHaceUnaSemana = new Date();
  //   fechaHaceUnaSemana.setDate(fechaActual.getDate() - 7);
  
  //   // Filtrar las visitas en el rango de fechas
  //   var visitasSemanales = this.visitas.filter(visita => {
  //     var fechaVisita = new Date(visita.fecha);
  //     return fechaVisita >= fechaHaceUnaSemana && fechaVisita <= fechaActual;
  //   });
  
  //   // Contar las visitas semanales
  //   var contadorVisitasSemanales = visitasSemanales.length;
  
  //   // Imprimir el resultado
  //   console.log(`El número de visitas semanales es: ${contadorVisitasSemanales}`);
  // }

  //  calcularVisitasPorSemanas() {
  //   let url = URL_SERVICIOS + '/visitas';
  //   this.http.get(url).subscribe((resp : any) => {
  //       //var visitasPorDias = res; // Supongamos que recibes un arreglo con las visitas por      
  //        //var visitasPorDias: [] | any 
  //        this.visitasPorDias = resp.visitas; // Supongamos que recibes un arreglo con las visitas por días
  //       //const visitasPorSemanas:any = [];
  //       let contadorSemanal = 0;
  
  //       this.visitasPorDias.forEach((visitas, index) => {
  //         contadorSemanal += visitas;
  //         console.log(contadorSemanal);
  
  //         // Si el día actual es el último de la semana o si hemos llegado al final del arreglo de visitas
  //         if ((index + 1) % 7 === 0 || index === this.visitasPorDias.length - 1) {
  //           this.visitasPorSemanas.push(contadorSemanal);
  //           contadorSemanal = 0;
  //         }
  //       });
  
  //       console.log(this.visitasPorSemanas); // Aquí tienes el arreglo con las visitas por semanas
  //     },
  //     err => {
  //       console.error('Error al obtener las visitas por días', err);
  //     }
  //   );
  // }


}

// export interface Visita {
//   ip: string;
//   contador: number;
//   fecha: Date;
// }