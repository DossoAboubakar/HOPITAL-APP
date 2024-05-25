import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routesGuardGuard } from './routes-guard.guard';

describe('routesGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routesGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
