// Core modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// Modules
import {ClrDropdownModule, ClrIconModule} from '@clr/angular';

// Components
import {AuditLogsComponent} from './audit-logs/audit-logs.component';

// Other
import {adminRoutes} from './admin.routes';
import {GravatarDirective} from '../_directives/gravatar.directive';

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
  ],
  exports: [],
  providers: []
})
export class AdminModule {
}
