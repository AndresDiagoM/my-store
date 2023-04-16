import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'zone.js';  // Included with Angular CLI. Para que funcione el hot reload en stackblitz

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
