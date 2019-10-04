import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { User } from '../../../models/user.model';
import { Mentor } from '../../../models/mentor.model';
import { TrainingService } from '../../../services/training.service';
import { Training } from '../../../models/training.model';
import { Payment } from '../../../models/payment.model';
import { PaymentService } from '../../../services/payment.service';
import { UserSignupService } from '../../../services/user-signup.service';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.css'],
  providers: [TrainingService, PaymentService, UserSignupService]
})
export class UserPaymentsComponent implements OnInit {

  constructor(private trainingService : TrainingService, private paymentService: PaymentService, private userSignupService: UserSignupService, private router: Router, public snackBar: MatSnackBar) { }
  training: Training = new Training();

  payment: Payment = new Payment();

  txnTypes = [
    {
      "value" :  'Debit Card',
      "viewValue": 'Debit Card'
    },
    {
      "value" :  'Credit Card',
      "viewValue": 'Credit Card'
    },
    {
      "value" :  'Net Banking',
      "viewValue": 'Net Banking'
    }
  ];

  whoLoggedIn: User | Mentor = JSON.parse(sessionStorage.getItem('whoLoggedIn')); 

  ngOnInit() {
    let whoLoggedIn = JSON.parse(sessionStorage.getItem('whoLoggedIn'));
    this.trainingService.getTrainingById(whoLoggedIn.trainingId).subscribe(data => {
      this.training = data;
      console.log(this.training);
    });
  }

  pay() {
    this.payment.amount = this.training.fees;
    this.payment.mentorName = this.training.mentor.firstName + " " + this.training.mentor.lastName;
    this.payment.remarks = this.training.razorPaymentId;
    this.payment.skillName = this.training.skill.map(skill => skill.name).toString();
    this.payment.trainingId = this.training.id;
    this.paymentService.addPayment(this.payment).subscribe(data => {
      console.log("paid!");
      console.log(this.payment);
      
    },
    error => {
      console.log("error bc");
      console.log(this.payment);
      
      
    });
    this.userSignupService.putUser(this.whoLoggedIn).subscribe(data => {
      let message =
          "Hurrah! You've been enrolled in training.";
          let snackBarRef = this.snackBar.open(message, "View", {
            duration: 2000
          });
          snackBarRef.onAction().subscribe(() => {
            this.router.navigateByUrl("/user/ongoing-trainings");
          });
          snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigateByUrl("/user/ongoing-trainings");
          });
    }),
    error => {
      let message =
      "Opps! Something went wrong.";
      let snackBarRef = this.snackBar.open(message, "Close", {
        duration: 5000
      });
      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      });
    }
  }

}
