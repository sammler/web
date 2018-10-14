import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoutComponent, PreferencesComponent, DashboardComponent]
})
export class UserModule { }
