import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


import {IntervalSetting, Setting} from './settings';
import {StrategyHeartbeatService} from '../strategy-heartbeat.service';
import {AuthenticationService} from '../../../_services';

@Component({
  selector: 'strategy-heartbeat-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnChanges {

  strategyHeartbeatSettingsForm: FormGroup;
  setting: Setting = new Setting();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private heartBeatService: StrategyHeartbeatService
  ) {
    this.strategyHeartbeatSettingsForm = this.formBuilder.group({
      toggleStrategyEnabled: [''],
      toggleEveryMinute: [''],
      toggleEveryTwoMinutes: [''],
      toggleEveryFiveMinutes: [''],
      toggleEveryTenMinutes: [''],
      toggleEveryHour: [''],
      toggleEveryDay: [''],
      toggleEveryWeek: [''],
      toggleEveryMonth: [''],
    });
  }

  ngOnInit() {

    this.heartBeatService.getSettings()
      .subscribe(result => {
        this.setting = result[0];
        console.log('heartbeat settings: ', this.setting);
        this.strategyHeartbeatSettingsForm.patchValue({
          toggleStrategyEnabled: this.setting.enabled,
          toggleEveryMinute: this.setting.every_minute.enabled,
          toggleEveryTwoMinutes: this.setting.every_two_minutes.enabled,
          toggleEveryFiveMinutes: this.setting.every_five_minutes.enabled,
          toggleEveryTenMinutes: this.setting.every_ten_minutes.enabled,
          toggleEveryHour: this.setting.every_hour.enabled,
          toggleEveryDay: this.setting.every_day.enabled,
          toggleEveryWeek: this.setting.every_week.enabled,
          toggleEveryMonth: this.setting.every_month.enabled,
        });
      });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.strategyHeartbeatSettingsForm.controls;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OK, we have changes ...');
  }

  submitSettings(): void {
    console.group('Submit settings');
    console.log('strategy enabled:', this.f.toggleStrategyEnabled.value || false);
    console.log('-- every_minute:', this.f.toggleEveryMinute.value || false);
    console.log('-- every_two_minutes:', this.f.toggleEveryTwoMinutes.value || false);
    console.log('-- every_five_minutes:', this.f.toggleEveryFiveMinutes.value || false);
    console.log('-- every_ten_minutes:', this.f.toggleEveryTenMinutes.value || false);
    console.log('-- every_hour:', this.f.toggleEveryHour.value || false);
    console.log('-- every_day:', this.f.toggleEveryDay.value || false);
    console.log('-- every_week:', this.f.toggleEveryWeek.value || false);
    console.groupEnd();

    let payLoad: Setting = new Setting();
    payLoad.user_id = this.authService.currentUser._id;
    payLoad.enabled = this.f.toggleStrategyEnabled.value || false;
    payLoad.every_minute = {
      enabled: this.f.toggleEveryMinute.value || false
    };
    payLoad.every_two_minutes = {
      enabled: this.f.toggleEveryTwoMinutes.value || false
    };
    payLoad.every_five_minutes = {
      enabled: this.f.toggleEveryFiveMinutes.value || false
    };
    payLoad.every_ten_minutes = {
      enabled: this.f.toggleEveryTenMinutes.value || false
    };
    payLoad.every_hour = {
      enabled: this.f.toggleEveryHour.value || false
    };
    payLoad.every_day = {
      enabled: this.f.toggleEveryDay.value || false
    };
    payLoad.every_week = {
      enabled: this.f.toggleEveryWeek.value || false
    };
    payLoad.every_month= {
      enabled: this.f.toggleEveryMonth.value || false
    };

    this.heartBeatService.saveSettings(payLoad)
      .subscribe(() => console.log('OK, we are done'));
  }

}
