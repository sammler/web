import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StrategyGithubModule} from './strategy-github/strategy-github.module';
import {StrategyHeartbeatModule} from './strategy-heartbeat/strategy-heartbeat.module';
import {RouterModule} from '@angular/router';

import {strategiesRoutes} from './strategies.routes';

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

  ]
})
export class StrategiesModule { }
