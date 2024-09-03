import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import {CommonModule } from '@angular/common';

//rutas
import { APP_ROUTES } from './app.routes';

//modulos
import { PagesModule } from './page/pages.module';


//temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//servicios
import { ServiceModule } from './services/service.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./AppComponent";

import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';



//import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
//import { AdminComponent } from './login/admin/admin.component';
import { UsuariosComponent } from './login/usuarios/usuarios.component';
import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';


////pipe module
import { PipesModule } from './pipes/pipes.module';
import { UploadFileComponent1 } from './components/upload-file/upload-file.component';
import { ImageUploadModule } from 'angular2-image-upload'; 



import {HttpClient, HttpClientModule } from '@angular/common/http';


//import { TranslateLoader, TranslateModule } from "@ngx-translate/core"

import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { PaginisComponent } from './login/paginis/paginis.component'

//import { NuevopaginiComponent } from './login/nuevopagini/nuevopagini.component';
import { PaginiComponent } from './login/paginis/pagini.component';
// import { SintesisComponent } from './page/sintesis/sintesis.component';

import { registerLocaleData } from '@angular/common';

    // importar locales
    import localePy from '@angular/common/locales/es-PY';
    import localePt from '@angular/common/locales/pt';
    import localeEn from '@angular/common/locales/en';
    import localeEsAr from '@angular/common/locales/es-AR';
import { ActComponent } from './login/act/act.component';
import { NotComponent } from './login/not/not.component';
import { SalComponent } from './login/sala/sala.component';

import { YouTubePlayerModule } from "@angular/youtube-player";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

    // registrar los locales con el nombre que quieras utilizar a la hora de proveer
    registerLocaleData(localePy, 'es');
    registerLocaleData(localePt, 'pt');
    registerLocaleData(localeEn, 'en');
    registerLocaleData(localeEsAr, 'es-Ar');





export function HttpLoaderFactory(http: HttpClient ){
  return new TranslateHttpLoader(http);
}


//export function CreateTranslateLoader(http: HttpClient ){
 // return new TranslateHttpLoader(http, './assets/il8n', '.json');
//}


@NgModule({
  declarations: [    
    AppComponent,
    LoginComponent,
    RegisterComponent,
  //  AdminComponent,
    UsuariosComponent,
    ModalUploadComponent,
     UploadFileComponent1,

    
  

    //UploadComponent,
    //ListComponent,

    PaginisComponent, 
    PaginiComponent, 
    // NuevopaginiComponent, 
    // SintesisComponent
    ActComponent,
    NotComponent ,
    SalComponent   
     
  ],
  imports: [     
    YouTubePlayerModule,
    
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
   
   
    //MatDividerModule,
   // MatGridListModule,
   //MatDialogModule,
   // MatButtonModule,

    FlexLayoutModule,
    HammerModule,       
    
    HttpClientModule,
 
   //TranslateModule.forRoot( {
    //    loader: {
    //      provide: TranslateLoader,
    //      useFactory: (CreateTranslateLoader),
    //      deps:  [HttpClient]  
    //   }
    //   }),  


    ImageUploadModule.forRoot(),    

    APP_ROUTES,

    PagesModule,

    [FormsModule],
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceModule,
    PipesModule,     
    

   AppRoutingModule,
   ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) , [
    FontAwesomeModule
  ]
   //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
   // ServiceWorkerModule.register('ngsw-worker.js', {
     // enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      //registrationStrategy: 'registerWhenStable:30000'
    //})
  ],
    
   // Aqui usas el nombre que hayas colocado al locale, en este caso es-Ar o pt o en, etc
   providers: [ 
    { provide: LOCALE_ID, useValue: 'es-Ar' }, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
