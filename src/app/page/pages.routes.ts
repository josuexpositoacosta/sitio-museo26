import {RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardService } from '../services/service.index';
import { EdificioComponent } from './edificio/edificio.component';
import { MuseoComponent } from './museo/museo.component';
 
import { HistoriaComponent } from './historia/historia.component';
import { Sala1Component } from './sala1/sala1.component';
import { Sala2Component } from './sala2/sala2.component';
import { Sala3Component } from './sala3/sala3.component';
import { Sala4Component } from './sala4/sala4.component';
import { MuestradelmesComponent } from './muestradelmes/muestradelmes.component';
import { BovedaComponent } from './boveda/boveda.component';
import { PaseovirtualComponent } from './paseovirtual/paseovirtual.component';
import { BibliotecavirtualComponent } from './bibliotecavirtual/bibliotecavirtual.component';
import { TiendavirtualComponent } from './tiendavirtual/tiendavirtual.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

import { CursosComponent } from './cursos/cursos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosdetallesComponent } from './eventosdetalles/eventosdetalles.component';
import { SalasComponent } from './salas/salas.component';
import { Sala5Component } from './sala5/sala5.component';
import { Sala6Component } from './sala6/sala6.component';
import { ActividadComponent } from './actividad/actividad.component';
import { Sala7Component } from './sala7/sala7.component';
//import { VisitasComponent } from './visitas/visitas.component';
import { SintesisComponent } from './sintesis/sintesis.component';
import { URL_SERVICIOS_REDMUSEOS } from 'src/app/config/REDMUSEOS';
import { SalaexpotranComponent } from './Salaexpotran/Salaexpotran.component';
import { NoticiasdetallesComponent } from './noticiasdetalles/noticiasdetalles.component';
import { Noticias1Component } from './noticias1/noticias.component';

 


const pagesRoutes: Routes =[
{  
   path:  '', 
    component: PagesComponent,
    canActivate: [LoginGuardService],
          children:[   
           
           {path: 'actividad', component: ActividadComponent, data:{ titulo : 'Actividad' } },     
           {path: 'historia', component: HistoriaComponent, data:{ titulo : 'Historia' } },    
           {path: "dashboard", component: DashboardComponent, data:{ titulo : "Dashboard" } },
           {path: 'edificio', component: EdificioComponent, data:{ titulo : 'Edificio' } },
           {path: 'museo', component: MuseoComponent, data:{ titulo : 'Museo' } },
 
          // {path: 'visitas', component: VisitasComponent, data:{ titulo : 'Visitas' } },
           
           {path: 'salapoli', component: SalasComponent, data:{ titulo : 'Sala Polifuncional' } },
           {path: 'salaexpo', component: SalaexpotranComponent, data:{ titulo : 'Salas' } },

           {path: 'sala1', component: Sala1Component, data:{ titulo : 'Sala 1' } },
           {path: 'sala2', component: Sala2Component, data:{ titulo : 'Sala 2' } },
           {path: 'sala3', component: Sala3Component, data:{ titulo : 'Sala 3' } },
           {path: 'sala4', component: Sala4Component, data:{ titulo : 'Sala 4' } },
           {path: 'sala5', component: Sala5Component, data:{ titulo : 'Sala 5' } },
           {path: 'sala6', component: Sala6Component, data:{ titulo : 'Sala 6' } },
           {path: 'sala7', component: Sala7Component, data:{ titulo : 'Sala 7' } },
          
           {path: 'cursos', component: CursosComponent, data:{ titulo : 'cursos' } },

           {path: 'noticias', component: NoticiasComponent, data:{ titulo : 'Noticias' } },
           {path: 'noticias1', component: Noticias1Component, data:{ titulo : 'Noticias' } },
           {path: 'noticias2', component: NoticiasComponent, data:{ titulo : 'Noticias' } },
           {path: 'noticias3', component: Noticias1Component, data:{ titulo : 'Noticias' } },
           {path: 'noticias4', component: NoticiasComponent, data:{ titulo : 'Noticias' } },

           


 
           {path: 'detalle', component: NoticiasdetallesComponent, data:{ titulo : 'Detalle' } },

          

           {path: 'muestradelmes', component: MuestradelmesComponent, data:{ titulo : 'Muestra del Mes' } },
           {path: 'boveda', component: BovedaComponent, data:{ titulo : 'Boveda' } },

           {path: 'paseovirtual', component: PaseovirtualComponent, data:{ titulo : 'Paseo Virtual' } },
           {path: 'bibliotecavirtual', component: BibliotecavirtualComponent, data:{ titulo : 'Biblioteca Virtual' } },
           {path: 'tiendavirtual', component: TiendavirtualComponent, data:{ titulo : 'Tienda Virtual' } },

           {path: 'eventos', component: EventosComponent, data:{ titulo : 'Actividades' } },
           {path: 'detalles', component: EventosdetallesComponent, data:{ titulo : 'detalles' } },

           {path: 'contacto', component: ContactoComponent, data:{ titulo : 'Contacto' } },

          // {path: 'progress', component:ProgressComponent, data:{ titulo : 'Progress' }  },
           //{path: 'graficas1', component:Graficas1Component, data:{ titulo : 'Graficas' }  },
          // {path: 'promesas', component:PromesasComponent, data:{ titulo : 'Promesas' }  },
          // {path: 'rxjs', component:RxjsComponent, data:{ titulo : 'RxJs' } },
          // {path: 'accout-settings', component:AccoutSettingsComponent, data:{ titulo : 'Ajustes del Tema' }  },
         
           {path: 'pages', component:PagesComponent, data:{ titulo : 'Pages' }  },           
           {path: 'sintesis', component:SintesisComponent, data:{ titulo : 'Sintesis' }  },            
           
           
          // {path: '**', component: NopagefoundComponent},

             //Mantenimiento       
          //{path: 'usuarios', component:UsuariosComponent, data:{ titulo : 'Mantenimiento de Usuarios' }  },
          {path: '', redirectTo:'/dashboard', pathMatch:'full' }
          ] 
     
}];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);