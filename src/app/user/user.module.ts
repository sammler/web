import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoutComponent, PreferencesComponent]
})
export class UserModule { }
