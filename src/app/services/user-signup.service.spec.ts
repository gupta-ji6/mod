import { TestBed, inject } from '@angular/core/testing';

import { UserSignupService } from './user-signup.service';

describe('UserSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSignupService]
    });
  });

  it('should be created', inject([UserSignupService], (service: UserSignupService) => {
    expect(service).toBeTruthy();
  }));
});
