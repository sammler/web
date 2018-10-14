import {Routes} from '@angular/router';
import {LogsComponent} from './logs/logs.component';
import {OverviewComponent} from './overview/overview.component';
import {HeartbeatComponent} from './strategy/heartbeat/heartbeat.component';
import {TwitterComponent} from './strategy/twitter/twitter.component';
import {RssComponent} from './strategy/rss/rss.component';
import {GithubComponent} from './strategy/github/github.component';
import {AboutComponent} from './about/about.component';
import {PreferencesComponent} from './preferences/preferences.component';
import {LogoutComponent} from './logout/logout.component';

export const appRoutes: Routes = [
  {path: 'strategy/github', component: GithubComponent  },
  {path: 'strategy/heartbeat', component: HeartbeatComponent  },
  {path: 'strategy/twitter', component:  TwitterComponent },
  {path: 'strategy/rss', component:  RssComponent },
  {path: 'logs/list', component: LogsComponent  },
  {path: 'logout', component: LogoutComponent  },
  {path: 'preferences', component: PreferencesComponent  },
  {path: 'about', component: AboutComponent  },
  {path: '', component: OverviewComponent }
];
