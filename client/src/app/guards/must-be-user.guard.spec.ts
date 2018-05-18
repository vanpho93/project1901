import { TestBed, async, inject } from '@angular/core/testing';

import { MustBeUserGuard } from './must-be-user.guard';

describe('MustBeUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MustBeUserGuard]
    });
  });

  it('should ...', inject([MustBeUserGuard], (guard: MustBeUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
