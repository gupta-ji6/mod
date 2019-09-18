import { TestBed, inject } from '@angular/core/testing';

import { MentorSignupService } from './mentor-signup.service';

describe('MentorSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentorSignupService]
    });
  });

  it('should be created', inject([MentorSignupService], (service: MentorSignupService) => {
    expect(service).toBeTruthy();
  }));
});
