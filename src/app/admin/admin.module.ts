// Core modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// Modules
import {ClrDropdownModule, ClrIconModule} from '@clr/angular';

// Components
import {AuditLogsComponent} from './audit-logs/audit-logs.component';

// Services
import {SchedulerService} from './scheduler/scheduler.service';

// Other
import {adminRoutes} from './admin.routes';
import {GravatarDirective} from '../_directives/gravatar.directive';
import {SchedulerComponent} from './scheduler/scheduler.component';

@NgModule({
  imports: [
    ClrDropdownModule,
    ClrIconModule,
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    AuditLogsComponent,
    GravatarDirective,
    SchedulerComponent,
  ],
  exports: [],
  providers: [
    SchedulerService
  ]
})
export class AdminModule {
}
