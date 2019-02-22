import { TestBed, inject } from '@angular/core/testing';

import { PelaksanaanPendapatanService } from './pelaksanaan-pendapatan.service';

describe('PelaksanaanPendapatanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PelaksanaanPendapatanService]
    });
  });

  it('should be created', inject([PelaksanaanPendapatanService], (service: PelaksanaanPendapatanService) => {
    expect(service).toBeTruthy();
  }));
});
