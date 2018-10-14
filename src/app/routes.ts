import {Routes} from '@angular/router';
import {LogsComponent} from './logs/logs.component';
import {OverviewComponent} from './overview/overview.component';
import {HeartbeatComponent} from './strategy/heartbeat/heartbeat.component';
import {TwitterComponent} from './strategy/twitter/twitter.component';
import {RssComponent} from './strategy/rss/rss.component';
import {GithubComponent} from './strategy/github/github.component';
import {AboutComponent} from './about/about.component';
import {PreferencesComponent} from './user/preferences/preferences.component';
import {LogoutComponent} from './user/logout/logout.component';

export const appRoutes: Routes = [
  {path: 'strategy/github', component: GithubComponent  },
  {path: 'strategy/heartbeat', component: HeartbeatComponent  },
  {path: 'strategy/twitter', component:  TwitterComponent },
  {path: 'strategy/rss', component:  RssComponent },
  {path: 'logs/list', component: LogsComponent  },
  {path: 'user/logout', component: LogoutComponent  },
  {path: 'user/preferences', component: PreferencesComponent  },
  {path: '', component: OverviewComponent }
];
