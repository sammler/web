// Deps
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';

// Others
import {userSecurityRoutes} from './security.routes';
import { AuditLogsComponent } from './audit-logs/audit-logs.component';
import {ClrTabsModule} from '@clr/angular';
import {AuditLogsService} from './audit-logs/audit-logs.service';



@NgModule({
  imports: [
    ClrTabsModule,
    CommonModule,
    RouterModule.forChild(userSecurityRoutes)
  ],
  declarations: [
    HomeComponent,
    AuditLogsComponent
  ],
  exports: [

  ],
  providers: [
    AuditLogsService
  ]
})
export class SecurityModule { }
