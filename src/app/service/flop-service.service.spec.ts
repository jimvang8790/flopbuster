import { TestBed } from '@angular/core/testing';

import { FlopServiceService } from './flop-service.service';

describe('FlopServiceService', () => {
  let service: FlopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
