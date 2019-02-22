import { TestBed, inject } from '@angular/core/testing';

import { ApbdesService } from './apbdes.service';

describe('ApbdesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApbdesService]
    });
  });

  it('should be created', inject([ApbdesService], (service: ApbdesService) => {
    expect(service).toBeTruthy();
  }));
});
