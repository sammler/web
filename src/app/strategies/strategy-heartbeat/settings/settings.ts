
export class Setting {

  constructor() {}

  user_id: string;
  enabled: boolean;
  every_minute: IntervalSetting;
  every_two_minutes: IntervalSetting;
  every_five_minutes: IntervalSetting;
  every_ten_minutes: IntervalSetting;
  every_hour: IntervalSetting;
  every_day: IntervalSetting;
  every_week: IntervalSetting;
  every_month: IntervalSetting;
}

export class IntervalSetting {
  enabled: boolean = false;
}
