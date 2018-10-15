import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoutComponent} from './logout/logout.component';
import {SettingsComponent} from './settings/settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

import {userRoutes} from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    DashboardComponent,
    LogoutComponent,
    SettingsComponent,
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class UserModule {
}
