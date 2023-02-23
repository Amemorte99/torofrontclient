import { TestBed } from '@angular/core/testing';

import { ChargerOffreService } from './charger-offre.service';

describe('ChargerOffreService', () => {
  let service: ChargerOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargerOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
