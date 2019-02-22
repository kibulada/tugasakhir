import { TestBed, inject } from '@angular/core/testing';

import { PenggunaService } from './pengguna.service';

describe('PenggunaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PenggunaService]
    });
  });

  it('should be created', inject([PenggunaService], (service: PenggunaService) => {
    expect(service).toBeTruthy();
  }));
});
