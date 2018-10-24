// General imports
import {Routes} from '@angular/router';

// Services
import {AuthGuardService as AuthGuard} from '../_services/auth-guard.service';

// Components
import {AuditLogsComponent} from './audit-logs/audit-logs.component';
import {SchedulerComponent} from './scheduler/scheduler.component';

export const adminRoutes: Routes = [
  {path: 'admin/audit-logs', component: AuditLogsComponent, canActivate: [AuthGuard]  },
  {path: 'admin/scheduler', component: SchedulerComponent, canActivate: [AuthGuard]  },
];
