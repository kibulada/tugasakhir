import { TestBed, inject } from '@angular/core/testing';

import { RpjmService } from './rpjm.service';

describe('RpjmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpjmService]
    });
  });

  it('should be created', inject([RpjmService], (service: RpjmService) => {
    expect(service).toBeTruthy();
  }));
});
