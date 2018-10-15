import {Routes} from '@angular/router';
import {AuthGuardService as AuthGuard} from '../shared/auth-guard.service';

import {LogsComponent} from './logs/logs.component';

export const adminRoutes: Routes = [
  {path: 'admin/logs/list', component: LogsComponent, canActivate: [AuthGuard]  },
];
