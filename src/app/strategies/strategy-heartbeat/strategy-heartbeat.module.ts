import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

import {strategyHeartbeatRoutes} from './strategy-heartbeat.routes';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import {ClrFormsNextModule, ClrInputContainer, ClrInputModule, ClrTabsModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ClrFormsNextModule,
    ClrInputModule,
    ClrTabsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
