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

import {appRoutes} from './app.routes';


import {HomeComponent} from './home/home.component';
import {HeartbeatComponent} from './user/strategy/heartbeat/heartbeat.component';
import {TwitterComponent} from './user/strategy/twitter/twitter.component';
import {RssComponent} from './user/strategy/rss/rss.component';
import {GithubComponent} from './user/strategy/github/github.component';
import {StrategyGithubDashboard} from './user/strategy/github/dashboard/strategy-github-dashboard.component';
import {StrategyGithubSettings} from './user/strategy/github/settings/strategy-github-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    HeartbeatComponent,
    TwitterComponent,
    RssComponent,
    GithubComponent,
    HomeComponent,
    StrategyGithubDashboard,
    StrategyGithubSettings
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule,
    BrowserAnimationsModule,
    CoreModule,
    UserModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
