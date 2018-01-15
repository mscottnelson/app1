import { enableProdMode } from '../../commons/node_modules/@angular/core';
import { platformBrowserDynamic } from '../../commons/node_modules/@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
