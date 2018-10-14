import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {appRoutes} from './routes';

import {SideNavComponent} from './shared/side-nav/side-nav.component';
import {HeaderComponent} from './shared/header/header.component';

import {HomeComponent} from './home/home.component';

import {LogsComponent} from './admin/logs/logs.component';
import {AdminComponent} from './admin/admin.component';

import {DashboardComponent} from './user/dashboard/dashboard.component';
import {HeartbeatComponent} from './user/strategy/heartbeat/heartbeat.component';
import {TwitterComponent} from './user/strategy/twitter/twitter.component';
import {RssComponent} from './user/strategy/rss/rss.component';
import {GithubComponent} from './user/strategy/github/github.component';
import {LogoutComponent} from './user/logout/logout.component';
import {SettingsComponent} from './user/settings/settings.component';
import { LoginComponent } from './user/login/login.component';
import {StrategyGithubDashboard} from './user/strategy/github/dashboard/strategy-github-dashboard.component';
import {StrategyGithubSettings} from './user/strategy/github/settings/strategy-github-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    SideNavComponent,
    HeaderComponent,
    HeartbeatComponent,
    TwitterComponent,
    RssComponent,
    GithubComponent,
    LogoutComponent,
    SettingsComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    StrategyGithubDashboard,
    StrategyGithubSettings
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
