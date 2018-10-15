import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoutComponent} from './logout/logout.component';
import {SettingsComponent} from './settings/settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

import {userRoutes} from './user.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    LogoutComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule {
}
