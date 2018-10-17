import {Routes} from '@angular/router';
import {AuthGuardService as AuthGuard} from '../_services/auth-guard.service';

import {LogsComponent} from './logs/logs.component';

export const adminRoutes: Routes = [
  {path: 'admin/logs/list', component: LogsComponent, canActivate: [AuthGuard]  },
];
