import {Routes} from '@angular/router';
import {AuthGuardService as AuthGuard} from '../../_services/auth-guard.service';

import {DashboardComponent} from './dashboard/dashboard.component';

export const strategyGithubRoutes: Routes = [
  {path: 'user/strategy/github', component: DashboardComponent, canActivate: [AuthGuard]  },
];
