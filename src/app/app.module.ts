import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {appRoutes} from './app.routes';

import {SideNavComponent} from './shared/side-nav/side-nav.component';
import {HeaderComponent} from './shared/header/header.component';

import {HomeComponent} from './home/home.component';

import {LogsComponent} from './admin/logs/logs.component';
import {AdminComponent} from './admin/admin.component';

import {HeartbeatComponent} from './user/strategy/heartbeat/heartbeat.component';
import {TwitterComponent} from './user/strategy/twitter/twitter.component';
import {RssComponent} from './user/strategy/rss/rss.component';
import {GithubComponent} from './user/strategy/github/github.component';
import {StrategyGithubDashboard} from './user/strategy/github/dashboard/strategy-github-dashboard.component';
import {StrategyGithubSettings} from './user/strategy/github/settings/strategy-github-settings.component';
import {CoreModule} from './core/core.module';
import {UserModule} from './user/user.module';

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
    AdminComponent,
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
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
