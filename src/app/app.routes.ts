import {Routes} from '@angular/router';

import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/user/dashboard', pathMatch:'full' },
  {path: '**', component: PageNotFoundComponent}
];
