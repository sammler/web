import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {LogsComponent} from './logs/logs.component';

import {adminRoutes} from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    LogsComponent
  ],
  exports: [

  ],
  providers: [

  ]
})
export class AdminModule { }
