import { TestBed, inject } from '@angular/core/testing';

import { KegiatanService } from './kegiatan.service';

describe('KegiatanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KegiatanService]
    });
  });

  it('should be created', inject([KegiatanService], (service: KegiatanService) => {
    expect(service).toBeTruthy();
  }));
});
