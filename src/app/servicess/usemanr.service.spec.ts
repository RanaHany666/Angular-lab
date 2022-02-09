import { TestBed } from '@angular/core/testing';

import { UsemanrService } from './usemanr.service';

describe('UsemanrService', () => {
  let service: UsemanrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsemanrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
