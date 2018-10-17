import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {coreRoutes} from './routes';
import {LoginComponent} from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClrIconModule} from '@clr/angular';



@NgModule({
  declarations: [
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClrIconModule,
    ReactiveFormsModule,
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class CoreModule { }
