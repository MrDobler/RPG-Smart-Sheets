import { OutrosAtributosModule } from './outros-atributos.module';

describe('OutrosAtributosModule', () => {
  let outrosAtributosModule: OutrosAtributosModule;

  beforeEach(() => {
    outrosAtributosModule = new OutrosAtributosModule();
  });

  it('should create an instance', () => {
    expect(outrosAtributosModule).toBeTruthy();
  });
});
