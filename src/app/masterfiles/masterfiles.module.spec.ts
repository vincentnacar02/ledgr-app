import { MasterfilesModule } from './masterfiles.module';

describe('MasterfilesModule', () => {
  let masterfilesModule: MasterfilesModule;

  beforeEach(() => {
    masterfilesModule = new MasterfilesModule();
  });

  it('should create an instance', () => {
    expect(masterfilesModule).toBeTruthy();
  });
});
