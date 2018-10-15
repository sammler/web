import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import {strategyGithubRoutes} from './strategy-github.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(strategyGithubRoutes)
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
export class StrategyGithubModule { }
