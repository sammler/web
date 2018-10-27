import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {coreRoutes} from './core.routes';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClrFormsNextModule, ClrIconModule} from '@clr/angular';
import {RegisterComponent} from './register/register.component';

@NgModule({
  imports: [
    CommonModule, //Todo: needed?
    ClrFormsNextModule,
    ClrIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(coreRoutes)
  ],
  declarations: [
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class CoreModule {
}
