import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

import {strategyHeartbeatRoutes} from './strategy-heartbeat.routes';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import {ClrTabsModule} from '@clr/angular';

@NgModule({
  imports: [
    ClrTabsModule,
    CommonModule,
    RouterModule.forChild(strategyHeartbeatRoutes),
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    SettingsComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class StrategyHeartbeatModule { }
