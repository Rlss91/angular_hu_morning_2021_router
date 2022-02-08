import { TestBed } from '@angular/core/testing';

import { ServersDataService } from './servers-data.service';

describe('ServersDataService', () => {
  let service: ServersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
