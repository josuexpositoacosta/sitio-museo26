 import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { URL_SERVICIOS_PASEOVIRTUAL } from 'src/app/config/PASEOVIRTUAL';
import { URL_SERVICIOS_REDMUSEOS } from 'src/app/config/REDMUSEOS';
import { URL_SERVICIOS_SALANAV } from 'src/app/config/SALANAV';

@Injectable()
export class SidebarService {


 
  menuH: any = [ 
    {
      titulo: 'El 26 de Julio de 1953',
      url: '/historia',
      icono: 'mdi mdi-gauge'
      //,
    //  submenu: [
     //   { titulo: 'Historia de la acción', url: '/historia' },
     //   { titulo: 'Historia del Museo', url: '/edificio' },
       // { titulo : 'Historia del Museo', url: '/museo' }      
     // ]
    }
  ];

  menuS: any = [
    {
      titulo: 'Salas',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo : 'Sala Polifuncional', url: '/salapoli' },  
        { titulo: 'Sala Exposiciones Transitoria', url: '/salaexpo' }                   
      ]
    }
  ];

  menuSa: any = [
    {
      titulo: 'Salas',
      icono: 'mdi mdi-gauge',
      submenu: [      
        { titulo: 'Sala 1- Doctrinas del Maestro', url: '/sala1' },
        { titulo : 'Sala 2- La fortaleza militar', url: '/sala2' },
        { titulo: 'Sala 3- Los preparativos del asalto', url: '/sala3' },
        { titulo : 'Sala 4- El asalto', url: '/sala4' },
        { titulo: 'Sala 5- La Historia me Absolverá', url: '/sala5' },
        { titulo : 'Sala 6- Victoria de un ideal', url: '/sala6' },
        // { titulo: 'Sala 7- Las ideas no se matan', url: '/sala7' },
        { titulo: 'Sala 7- La represión batistiana', url: '/sala7' },                            
        { titulo: 'Sala Transitoria', url: '/salaexpo' }
      ]
    }
  ];


  menuM: any = [ 
    {
      titulo: 'El Museo',
      url: '/edificio',
      icono: 'mdi mdi-gauge'
      //,
     // submenu: [
     //   { titulo: 'Red de museos 26 de Julio', url: URL_SERVICIOS_REDMUSEOS },
     //   { titulo: 'Visitas guiadas', url: '/visitas' },
    //   { titulo: 'Sala de navegación', url: URL_SERVICIOS_SALANAV },
     //  { titulo: 'Noticias e informaciones', url: '/noticias' },                        
      // { titulo: 'Paseo Virtual', url: URL_SERVICIOS_PASEOVIRTUAL },
    //    { titulo : 'Biblioteca Virtual', url: URL_SERVICIOS_BIBLIOTECAVIRTUAL },      
    //    { titulo : 'Tienda Virtual', url: URL_SERVICIOS_TIENDAVIRTUAL}       
    //  ]
    }
  ];


  menuE: any = [
    {
      titulo: 'Servicios',
     // url: '/historia',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Programación Cultural', url: '/eventos' },
    //    { titulo: 'Centro de documentación', url: URL_SERVICIOS_CENTRODOC },
    //    { titulo : 'Venta de libros', url: URL_SERVICIOS_TIENDALIB }      
      ]
    }
  ];

 
  menuU: any = [     
    {
    titulo: 'Mantenimiento del Sistema',
    icono: 'mdi mdi-folder-lock-open',
    submenu: [       
         
     {titulo: 'Pagina Principal', url: '/pagini' },   
     { titulo: 'Actividades', url: '/act'}, 
     { titulo: 'Noticias', url: '/not'}, 
     { titulo: 'Salas', url: '/sal'}, 
     { titulo: 'Autenticarse', url: '/login'}   
       
    ]
  }
  ];

  menu: any = [
    {
      titulo: 'Historia',
      icono: 'mdi mdi-gauge',
      submenu: [       
       // { titulo: 'Dashboard', url: '/dashboard' },
       // { titulo : 'ProgressBar', url: '/progress' },
      //  { titulo: 'Gráficas', url: '/graficas1' },
       // { titulo: 'Promesas', url: '/promesas' },
       // { titulo: 'RxJs', url: '/rxjs' }
      ]
    },
    {
    titulo: 'Mantenimientos',
    icono: 'mdi mdi-folder-lock-open',
    submenu: [       
     { titulo: 'Usuarios', url: '/usuarios' }     
    ]
  }
  ];



  constructor(
    public router: Router
  ) { }

  refresh(): void { window.location.reload(); }


}
