import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

import {strategyHeartbeatRoutes} from './strategy-heartbeat.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(strategyHeartbeatRoutes)
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class StrategyHeartbeatModule { }
