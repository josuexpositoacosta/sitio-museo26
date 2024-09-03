import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

try {
  if (environment.production) {
     enableProdMode();
   }

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
} catch (error) {
  // Captura cualquier error y evita que se muestre en la consola
}