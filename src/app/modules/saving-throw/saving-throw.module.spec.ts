import { SavingThrowModule } from './saving-throw.module';

describe('SavingThrowModule', () => {
  let savingThrowModule: SavingThrowModule;

  beforeEach(() => {
    savingThrowModule = new SavingThrowModule();
  });

  it('should create an instance', () => {
    expect(savingThrowModule).toBeTruthy();
  });
});
