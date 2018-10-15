import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: '**', component: PageNotFoundComponent}
];
