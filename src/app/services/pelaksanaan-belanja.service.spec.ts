import { TestBed, inject } from '@angular/core/testing';

import { PelaksanaanBelanjaService } from './pelaksanaan-belanja.service';

describe('PelaksanaanBelanjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PelaksanaanBelanjaService]
    });
  });

  it('should be created', inject([PelaksanaanBelanjaService], (service: PelaksanaanBelanjaService) => {
    expect(service).toBeTruthy();
  }));
});
