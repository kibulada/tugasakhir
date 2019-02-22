import { TestBed, inject } from '@angular/core/testing';

import { DesaService } from './desa.service';

describe('DesaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesaService]
    });
  });

  it('should be created', inject([DesaService], (service: DesaService) => {
    expect(service).toBeTruthy();
  }));
});
