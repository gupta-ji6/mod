import { Component, OnInit } from '@angular/core';
import { MentorSignupService } from '../../../services/mentor-signup.service';
import { User } from '../../../models/user.model';
import { Mentor } from '../../../models/mentor.model';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css'],
  providers: [MentorSignupService]
})
export class MentorProfileComponent implements OnInit {

  whoLoggedIn: User | Mentor;
  mentor: Mentor = new Mentor();
  constructor(private mentorSignupService: MentorSignupService) { }

  ngOnInit() {
    this.whoLoggedIn = JSON.parse(sessionStorage.getItem("whoLoggedIn"));
    this.mentorSignupService.getMentorById(this.whoLoggedIn.id).subscribe(data => {
      this.mentor = data;
    })
  }

}
