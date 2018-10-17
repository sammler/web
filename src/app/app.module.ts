// Deps
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ClarityModule, ClrFormsNextModule, ClrIconModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Modules
import {AdminModule} from './admin/admin.module';
import {CoreModule} from './core/core.module';
import {UserModule} from './user/user.module';
import {StrategiesModule} from './strategies/strategies.module';

// Components
import {AlertComponent} from './shared/alert/alert.component';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {SideNavComponent} from './shared/side-nav/side-nav.component';

// Services
import {AlertService} from './_services/alert.service';
import {AuthenticationService} from './_services';
import {UserService} from './_services/user.service';


import {appRoutes} from './app.routes';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorInterceptor} from './_helpers/error.interceptor';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule,
    ClrIconModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    CoreModule,
    UserModule,
    AdminModule,
    StrategiesModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    AlertComponent
  ],
  exports: [],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
