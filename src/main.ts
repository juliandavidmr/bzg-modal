import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (customElements.get('bzg-modal')) {
  console.error('bzg-modal component already defined -> nothing to do...')
} else {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}
