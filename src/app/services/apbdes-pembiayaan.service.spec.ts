import { TestBed, inject } from '@angular/core/testing';

import { ApbdesPembiayaanService } from './apbdes-pembiayaan.service';

describe('ApbdesPembiayaanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApbdesPembiayaanService]
    });
  });

  it('should be created', inject([ApbdesPembiayaanService], (service: ApbdesPembiayaanService) => {
    expect(service).toBeTruthy();
  }));
});
