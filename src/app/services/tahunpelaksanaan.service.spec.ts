import { TestBed, inject } from '@angular/core/testing';

import { TahunpelaksanaanService } from './tahunpelaksanaan.service';

describe('TahunpelaksanaanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TahunpelaksanaanService]
    });
  });

  it('should be created', inject([TahunpelaksanaanService], (service: TahunpelaksanaanService) => {
    expect(service).toBeTruthy();
  }));
});
