import { TestBed, inject } from '@angular/core/testing';

import { FiscalyearService } from './fiscalyear.service';

describe('FiscalyearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiscalyearService]
    });
  });

  it('should be created', inject([FiscalyearService], (service: FiscalyearService) => {
    expect(service).toBeTruthy();
  }));
});
