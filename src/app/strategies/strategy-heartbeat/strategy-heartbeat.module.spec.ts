import { StrategyHeartbeatModule } from './strategy-heartbeat.module';

describe('StrategyHeartbeatModule', () => {
  let strategyHeartbeatModule: StrategyHeartbeatModule;

  beforeEach(() => {
    strategyHeartbeatModule = new StrategyHeartbeatModule();
  });

  it('should create an instance', () => {
    expect(strategyHeartbeatModule).toBeTruthy();
  });
});
