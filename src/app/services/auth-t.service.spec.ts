import { TestBed } from '@angular/core/testing';

import { AuthTService } from './auth-t.service';

describe('AuthTService', () => {
  let service: AuthTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
