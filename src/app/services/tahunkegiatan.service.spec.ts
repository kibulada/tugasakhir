import { TestBed, inject } from '@angular/core/testing';

import { TahunkegiatanService } from './tahunkegiatan.service';

describe('TahunkegiatanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TahunkegiatanService]
    });
  });

  it('should be created', inject([TahunkegiatanService], (service: TahunkegiatanService) => {
    expect(service).toBeTruthy();
  }));
});
