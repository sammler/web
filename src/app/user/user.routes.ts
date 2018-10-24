import {Routes} from '@angular/router';

import {SettingsComponent} from './settings/settings.component';
import {LogoutComponent} from './logout/logout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuardService as AuthGuard} from '../_services/auth-guard.service';
import {ProfileComponent} from './profile/profile.component';

export const userRoutes: Routes = [
  {path: 'user/dashboard', component: DashboardComponent /*, canActivate: [AuthGuard] */  },
  {path: 'user/logout', component: LogoutComponent /*, canActivate: [AuthGuard] */  },
  {path: 'user/profile', component: ProfileComponent /*, canActivate: [AuthGuard] */  },
  {path: 'user/settings', component: SettingsComponent /*, canActivate: [AuthGuard] */  }
];
