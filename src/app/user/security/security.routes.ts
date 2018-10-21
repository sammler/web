// General imports
import {Routes} from '@angular/router';
import {AuthGuardService as AuthGuard} from '../../_services/auth-guard.service';

// Components
import {HomeComponent} from './home/home.component';
import {AuditLogsComponent} from './audit-logs/audit-logs.component';


export const userSecurityRoutes: Routes = [
  {path: 'user/security', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'user/security/audit-logs', component: AuditLogsComponent, canActivate: [AuthGuard]},
];
