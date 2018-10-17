import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuardService as AuthGuard} from '../../_services/auth-guard.service';


export const strategyHeartbeatRoutes: Routes = [
  {path: 'user/strategy/heartbeat', component: DashboardComponent, canActivate: [AuthGuard]},
];
