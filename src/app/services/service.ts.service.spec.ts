import { TestBed } from '@angular/core/testing';

import { ServiceTsService } from './service.ts.service';

describe('ServiceTsService', () => {
  let service: ServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
