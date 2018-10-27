import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'strategy-heartbeat-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnChanges {

  strategyHeartbeatSettingsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.strategyHeartbeatSettingsForm = this.formBuilder.group({
      toggleStrategyEnabled: [''],
      toggleEveryMinute: [''],
      toggleEveryFiveMinutes: [''],
      toggleEveryTenMinutes: [''],
      toggleEveryHour: [''],
      toggleEveryDay: [''],
      toggleEveryWeek: [''],
    });

  }
  // convenience getter for easy access to form fields
  get f() {
    return this.strategyHeartbeatSettingsForm.controls;
  }

  ngOnChanges(changes: SimpleChanges) {
   console.log('OK, we have changes ...');
  }

  submitSettings() {
    console.group('Submit settings');
    console.log('strategy enabled:', this.f.toggleStrategyEnabled.value || false);
    console.log('-- every_minute:', this.f.toggleEveryMinute.value || false);
    console.log('-- every_five_minutes:', this.f.toggleEveryFiveMinutes.value || false);
    console.log('-- every_ten_minutes:', this.f.toggleEveryTenMinutes.value || false);
    console.log('-- every_hour:', this.f.toggleEveryHour.value || false);
    console.log('-- every_day:', this.f.toggleEveryDay.value || false);
    console.log('-- every_week:', this.f.toggleEveryWeek.value || false);
    console.groupEnd();
  }

}
