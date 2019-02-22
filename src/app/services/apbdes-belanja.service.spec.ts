import { TestBed, inject } from '@angular/core/testing';

import { ApbdesBelanjaService } from './apbdes-belanja.service';

describe('ApbdesBelanjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApbdesBelanjaService]
    });
  });

  it('should be created', inject([ApbdesBelanjaService], (service: ApbdesBelanjaService) => {
    expect(service).toBeTruthy();
  }));
});
