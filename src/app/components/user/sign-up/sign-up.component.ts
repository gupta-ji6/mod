import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserSignupService } from '../../../services/user-signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserSignupService]
})

export class SignUpComponent implements OnInit {

  constructor(private router: Router, private userSignupService: UserSignupService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  user: User = new User();

  genders = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Don\'t want to specify', viewValue: 'Don\'t want to specify'}
  ];

  hide: boolean = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  contactNumber = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])

  getPhoneErrorMessage() {
    return this.contactNumber.hasError('required') ? 'You must enter a value' :
        this.contactNumber.hasError('minlength') ? 'Enter a 10 digit number' :
        this.contactNumber.hasError('maxlength') ? 'Enter a 10 digit number' :
            '';
  }

  linkedinUrl = new FormControl('', [Validators.required, Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]);

  getUrlErrorMessage() {
    return this.linkedinUrl.hasError('required') ? 'You must enter a value' :
        this.linkedinUrl.hasError('pattern') ? 'Not a valid URL' :
            '';
  }

  createUser(): void {
    this.userSignupService.createUser(this.user)
        .subscribe( data => {
          // alert("User created successfully.");
          let message = "Hey, " + data.firstName + ". You can now access our services!";
          let snackBarRef = this.snackBar.open(message, "Login", {
            duration: 10000,
          });
          snackBarRef.onAction().subscribe(() => {
            this.router.navigateByUrl('/login');
            // console.log('The snack-bar action was triggered!');
          });
          // console.log(data);
        });
  };

  openSnackBar(message: string, action: string) {
    
  }
}
