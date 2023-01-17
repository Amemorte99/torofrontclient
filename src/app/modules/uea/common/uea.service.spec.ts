import { TestBed } from '@angular/core/testing';

import { UeaService } from './uea.service';

describe('UeaService', () => {
  let service: UeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
