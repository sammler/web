import { TestBed } from '@angular/core/testing';

import { StrategyHeartbeatService } from './strategy-heartbeat.service';

describe('StrategyHeartbeatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StrategyHeartbeatService = TestBed.get(StrategyHeartbeatService);
    expect(service).toBeTruthy();
  });
});
