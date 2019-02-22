import { TestBed, inject } from '@angular/core/testing';

import { ApbdesPendapatanService } from './apbdes-pendapatan.service';

describe('ApbdesPendapatanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApbdesPendapatanService]
    });
  });

  it('should be created', inject([ApbdesPendapatanService], (service: ApbdesPendapatanService) => {
    expect(service).toBeTruthy();
  }));
});
