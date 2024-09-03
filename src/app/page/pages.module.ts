import { NgModule } from '@angular/core';

import { ShareModule } from '../shared/shared.module';

//ng2-Charts
import { NgChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

//pipe module
import { PipesModule } from '../pipes/pipes.module';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { EdificioComponent } from './edificio/edificio.component';
import { MuseoComponent } from './museo/museo.component';
import { Sala1Component } from './sala1/sala1.component';
import { Sala2Component } from './sala2/sala2.component';
import { Sala3Component } from './sala3/sala3.component';
import { Sala4Component } from './sala4/sala4.component';
import { PaseovirtualComponent } from './paseovirtual/paseovirtual.component';
import { TiendavirtualComponent } from './tiendavirtual/tiendavirtual.component';
import { BibliotecavirtualComponent } from './bibliotecavirtual/bibliotecavirtual.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HistoriaComponent } from './historia/historia.component';
import { MuestradelmesComponent } from './muestradelmes/muestradelmes.component';
import { BovedaComponent } from './boveda/boveda.component';
import { CursosComponent } from './cursos/cursos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosdetallesComponent } from './eventosdetalles/eventosdetalles.component';
import { NoticiasdetallesComponent } from './noticiasdetalles/noticiasdetalles.component';
import { SalasComponent } from './salas/salas.component';
import { Sala5Component } from './sala5/sala5.component';
import { Sala6Component } from './sala6/sala6.component';
import { ActividadComponent } from './actividad/actividad.component';
import { CompntsModule } from '../components/compnts.module';
import { RouterModule } from '@angular/router';
import { Sala7Component } from './sala7/sala7.component';
import { VisitasComponent } from './visitas/visitas.component';
import { SalaexpotranComponent } from './Salaexpotran/Salaexpotran.component';
import { Noticias1Component } from './noticias1/noticias.component';
import { Noticias2Component } from './noticias2/noticias.component';
import { Noticias3Component } from './noticias3/noticias.component';
import { Noticias4Component } from './noticias4/noticias.component';

import { YouTubePlayerModule } from "@angular/youtube-player";






 
@NgModule({
      declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        EdificioComponent,
        MuseoComponent,
       
        PaseovirtualComponent,
        TiendavirtualComponent,
        BibliotecavirtualComponent,
        EventosComponent,
        ContactoComponent,
        HistoriaComponent,
        MuestradelmesComponent,
        BovedaComponent,
        CursosComponent,
        
        EventosdetallesComponent,
        
        NoticiasdetallesComponent,
        
        NoticiasComponent,
        Noticias1Component,
        Noticias2Component,
        Noticias3Component,
        Noticias4Component, 


        Sala1Component,
        Sala2Component,
        Sala3Component,
        Sala4Component,
        SalasComponent,
        Sala5Component,
        Sala6Component,
        Sala7Component,
        SalaexpotranComponent,
        SalasComponent,

        ActividadComponent,
          
          VisitasComponent       
           
    ],
    exports:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        EdificioComponent,
        MuseoComponent,

        Sala1Component,
        Sala2Component,
        Sala3Component,
        Sala4Component,       
        Sala5Component,
        Sala6Component,
        Sala7Component,
        SalaexpotranComponent,
        SalasComponent,


        PaseovirtualComponent,
        TiendavirtualComponent,
        BibliotecavirtualComponent,
        EventosComponent,
        ContactoComponent,
        HistoriaComponent,
        MuestradelmesComponent,
        BovedaComponent,

        ActividadComponent,
        
        VisitasComponent
    ],
    imports:[
        YouTubePlayerModule,
        RouterModule,
        ShareModule, 
        PAGES_ROUTES,
        FormsModule,
        NgChartsModule,
        PipesModule,        
        CompntsModule,             
    ]
})
export class PagesModule{ }