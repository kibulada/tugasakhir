import { TestBed, inject } from '@angular/core/testing';

import { PelaksanaanPembiayaanService } from './pelaksanaan-pembiayaan.service';

describe('PelaksanaanPembiayaanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PelaksanaanPembiayaanService]
    });
  });

  it('should be created', inject([PelaksanaanPembiayaanService], (service: PelaksanaanPembiayaanService) => {
    expect(service).toBeTruthy();
  }));
});
