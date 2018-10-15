import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyGithubSettings } from './settings.component';

describe('SettingsComponent', () => {
  let component: StrategyGithubSettings;
  let fixture: ComponentFixture<StrategyGithubSettings>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyGithubSettings ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyGithubSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
