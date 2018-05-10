import { TestBed, inject } from '@angular/core/testing';

import { ValidateUserService } from './validate-user.service';

describe('ValidateUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateUserService]
    });
  });

  it('should be created', inject([ValidateUserService], (service: ValidateUserService) => {
    expect(service).toBeTruthy();
  }));
});
