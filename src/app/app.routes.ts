import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent } from './los-angeles-county-crime-watch-master-view/los-angeles-county-crime-watch-master-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'los-angeles-county-crime-watch-master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'los-angeles-county-crime-watch-master-view', component: LOSANGELESCOUNTYCRIMEWATCHMasterViewComponent, data: { text: 'LOS ANGELES COUNTY CRIME WATCH Master View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
