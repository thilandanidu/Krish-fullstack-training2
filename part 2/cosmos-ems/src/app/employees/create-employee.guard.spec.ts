import { TestBed } from '@angular/core/testing';

import { CreateEmployeeGuard } from './create-employee.guard';

describe('CreateEmployeeGuard', () => {
  let guard: CreateEmployeeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateEmployeeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
