import {Routes} from '@angular/router';
import {AuthGuardService as AuthGuard} from '../../_services/auth-guard.service';
import {HomeComponent} from './home/home.component';


export const strategyHeartbeatRoutes: Routes = [
  {path: 'user/strategy/heartbeat', component: HomeComponent /*, canActivate: [AuthGuard] */},
];
