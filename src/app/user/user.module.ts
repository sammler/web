// Deps
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// Components
import {DashboardComponent} from './dashboard/dashboard.component';
import {LogoutComponent} from './logout/logout.component';
import {SettingsComponent} from './settings/settings.component';
import {ProfileComponent} from './profile/profile.component';

// Others
import {userRoutes} from './user.routes';
import {SecurityModule} from './security/security.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    SecurityModule
  ],
  declarations: [
    DashboardComponent,
    LogoutComponent,
    ProfileComponent,
    SettingsComponent,
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class UserModule {
}
