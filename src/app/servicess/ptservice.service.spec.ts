import { TestBed } from '@angular/core/testing';

import { PtserviceService } from './ptservice.service';

describe('PtserviceService', () => {
  let service: PtserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
