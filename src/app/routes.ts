import {Routes} from '@angular/router';

import {LogsComponent} from './admin/logs/logs.component';
import {HeartbeatComponent} from './user/strategy/heartbeat/heartbeat.component';
import {TwitterComponent} from './user/strategy/twitter/twitter.component';
import {RssComponent} from './user/strategy/rss/rss.component';
import {GithubComponent} from './user/strategy/github/github.component';
import {AboutComponent} from './about/about.component';
import {PreferencesComponent} from './user/preferences/preferences.component';
import {LogoutComponent} from './user/logout/logout.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './user/dashboard/dashboard.component';

export const appRoutes: Routes = [
  {path: 'user/dashboard', component: DashboardComponent  },
  {path: 'user/strategy/github', component: GithubComponent  },
  {path: 'user/strategy/heartbeat', component: HeartbeatComponent  },
  {path: 'user/strategy/twitter', component:  TwitterComponent },
  {path: 'user/strategy/rss', component:  RssComponent },
  {path: 'admin/logs/list', component: LogsComponent  },
  {path: 'user/logout', component: LogoutComponent  },
  {path: 'user/preferences', component: PreferencesComponent  },
  {path: '', component: HomeComponent }
];
