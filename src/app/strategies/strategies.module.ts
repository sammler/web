import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {StrategyGithubModule} from './strategy-github/strategy-github.module';
import {StrategyHeartbeatModule} from './strategy-heartbeat/strategy-heartbeat.module';

import {strategiesRoutes} from './strategies.routes';
import {StrategyHeartbeatService} from './strategy-heartbeat/strategy-heartbeat.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(strategiesRoutes),
    StrategyGithubModule,
    StrategyHeartbeatModule
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ],
  providers: [
    StrategyHeartbeatService
  ]
})
export class StrategiesModule { }
