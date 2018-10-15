import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CoreModule} from './core/core.module';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';

import {AppComponent} from './app.component';
import {SideNavComponent} from './shared/side-nav/side-nav.component';
import {HeaderComponent} from './shared/header/header.component';
import {HomeComponent} from './home/home.component';

import {appRoutes} from './app.routes';
import {StrategiesModule} from './strategies/strategies.module';
import {AuthService} from './shared/auth.service';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule,
    BrowserAnimationsModule,
    CoreModule,
    UserModule,
    AdminModule,
    StrategiesModule
  ],
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    HomeComponent,
  ],
  exports: [

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
