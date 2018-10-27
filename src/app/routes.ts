import { Routes } from '@angular/router';
import {LogListComponent} from "./logs/log-list.component";

export const appRoutes:Routes = [
  { path: 'logs/list', component: LogListComponent }
];
