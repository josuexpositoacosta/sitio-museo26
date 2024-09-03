import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';
import { TranslateService } from "@ngx-translate/core";
import { SwPush, SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 // public t!: string | any;

  //title = 'museo';
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    public _ajustes: SettingsService,

   // private translate: TranslateService
     private swUpdate: SwUpdate,
     private swPush: SwPush           
  ) {
   // this.translate.setDefaultLang('en');
   // this.translate.use('en');

    //this.setAppLanguage();
    
     if (this.swUpdate.isEnabled) {
       this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
         if (confirm(`Do you want to update?`)) {
           window.location.reload();
         }
       });
 
       if (this.swPush.isEnabled) {
         this.swPush
           .requestSubscription({ serverPublicKey: 'VAPID_PUBLIC_KEY' })
           .then(sub => {
             console.log('send subscription to your server and wait form messages', sub.toJSON());
             this.swPush.messages.subscribe(msg => console.log('Received: ', msg));
           })
       }
     }
    
    // console.log(environment.production); // Logs false for default environment
  }

  //setAppLanguage() {
  //  this.t = this.translate.getBrowserLang();
   // this.translate.setDefaultLang('en');
    //this.translate.use(this.t);
 // }

}
