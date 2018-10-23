import {Routes} from '@angular/router';
import {AuthGuardService as AuthGuard} from '../_services/auth-guard.service';

import {AuditLogsComponent} from './audit-logs/audit-logs.component';

export const adminRoutes: Routes = [
  {path: 'admin/audit-logs', component: AuditLogsComponent, canActivate: [AuthGuard]  },
];
