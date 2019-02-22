import { TestBed, inject } from '@angular/core/testing';

import { PolapelaksanaanService } from './polapelaksanaan.service';

describe('PolapelaksanaanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolapelaksanaanService]
    });
  });

  it('should be created', inject([PolapelaksanaanService], (service: PolapelaksanaanService) => {
    expect(service).toBeTruthy();
  }));
});
