import { TestBed, inject } from '@angular/core/testing';

import { RkpService } from './rkp.service';

describe('RkpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RkpService]
    });
  });

  it('should be created', inject([RkpService], (service: RkpService) => {
    expect(service).toBeTruthy();
  }));
});
