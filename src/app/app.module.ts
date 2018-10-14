import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';

import {appRoutes} from './routes';
import { OverviewComponent } from './overview/overview.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { HeartbeatComponent } from './strategy/heartbeat/heartbeat.component';
import { TwitterComponent } from './strategy/twitter/twitter.component';
import { RssComponent } from './strategy/rss/rss.component';
import { GithubComponent } from './strategy/github/github.component';
import { LogoutComponent } from './user/logout/logout.component';
import { PreferencesComponent } from './user/preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    OverviewComponent,
    SideNavComponent,
    HeaderComponent,
    HeartbeatComponent,
    TwitterComponent,
    RssComponent,
    GithubComponent,
    LogoutComponent,
    PreferencesComponent
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
export class AppModule { }
