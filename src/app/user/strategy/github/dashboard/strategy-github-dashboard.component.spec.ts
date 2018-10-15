import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyGithubDashboard } from './dashboard.component';

describe('StrategyGithubDashboardComponent', () => {
  let component: StrategyGithubDashboard;
  let fixture: ComponentFixture<StrategyGithubDashboard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyGithubDashboard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyGithubDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
