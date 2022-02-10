import { TestBed } from '@angular/core/testing';

import { AuthTGuard } from './auth-t.guard';

describe('AuthTGuard', () => {
  let guard: AuthTGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthTGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
