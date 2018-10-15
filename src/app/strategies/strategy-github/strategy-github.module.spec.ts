import { StrategyGithubModule } from './strategy-github.module';

describe('StrategyGithubModule', () => {
  let strategyGithubModule: StrategyGithubModule;

  beforeEach(() => {
    strategyGithubModule = new StrategyGithubModule();
  });

  it('should create an instance', () => {
    expect(strategyGithubModule).toBeTruthy();
  });
});
