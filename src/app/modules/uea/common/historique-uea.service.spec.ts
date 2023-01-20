import { TestBed } from '@angular/core/testing';

import { HistoriqueUEAService } from './historique-uea.service';

describe('HistoriqueUEAService', () => {
  let service: HistoriqueUEAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueUEAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
