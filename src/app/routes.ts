import {Routes} from '@angular/router';
import {LogsComponent} from './logs/logs.component';
import {OverviewComponent} from './overview/overview.component';

export const appRoutes: Routes = [
  {path: 'logs/list', component: LogsComponent  },
  {path: '', component: OverviewComponent }
];
