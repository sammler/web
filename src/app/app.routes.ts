import {Routes} from '@angular/router';

import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AuthGuard} from './_guards/auth.guard';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/user/dashboard', pathMatch:'full', canActivate: [AuthGuard] },
  {path: '**', component: PageNotFoundComponent}
];
