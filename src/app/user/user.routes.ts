import {Routes} from '@angular/router';

import {SettingsComponent} from './settings/settings.component';
import {LogoutComponent} from './logout/logout.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const userRoutes: Routes = [
  {path: 'user/dashboard', component: DashboardComponent  },
  {path: 'user/logout', component: LogoutComponent  },
  {path: 'user/settings', component: SettingsComponent  }
];
