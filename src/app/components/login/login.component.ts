import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { FormControl, Validators } from "@angular/forms";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  input = {
    role: "",
    userName: "",
    password: ""
  };

  roles = [
    { value: "User", viewValue: "User" },
    { value: "Mentor", viewValue: "Mentor" },
    { value: "Admin", viewValue: "Admin" }
  ];

  email = new FormControl("", [Validators.required, Validators.email]);

  getEmailErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  hide: boolean = true;

  login(): void {
    if ((this.input.role == "User")) {
      this.loginService.getUser(this.input).subscribe(data => {
        if (data == null) {
          let message =
          "Opps! Your credentials are invalid.";
          let snackBarRef = this.snackBar.open(message, "Close", {
            duration: 5000
          });
          snackBarRef.onAction().subscribe(() => {
            snackBarRef.dismiss();
          });
        }
        else {
          sessionStorage.setItem('whoLoggedIn', JSON.stringify(data));
          this.router.navigateByUrl("/user")
        }
      }
      ,
      // error => {
      //   console.log(error);
      //   let snackBarRef = this.snackBar.open(error.error.message, "Close", {
      //     duration: 20000
      //   });
      // }
      );
    } else if (this.input.role == "Mentor") {
      this.loginService.getMentor(this.input).subscribe(data => {
        if (data == null) {
          let message =
            "Opps!, Your credentials are invalid.";
          let snackBarRef = this.snackBar.open(message, "Close", {
            duration: 5000
          });
          snackBarRef.onAction().subscribe(() => {
            snackBarRef.dismiss();
          });
        }
        else {
          sessionStorage.setItem('whoLoggedIn', JSON.stringify(data));
          this.router.navigateByUrl("/mentor")
        }
      });
    } else if (this.input.role = "Admin") {
      this.loginService.getUser(this.input).subscribe(data => {
        if (data == null) {
          let message =
          "Opps! Your credentials are invalid.";
          let snackBarRef = this.snackBar.open(message, "Close", {
            duration: 5000
          });
          snackBarRef.onAction().subscribe(() => {
            snackBarRef.dismiss();
          });
        }
        else {
          sessionStorage.setItem('whoLoggedIn', JSON.stringify(data));
          this.router.navigateByUrl("/admin/users");
        }
      });
    }
  }
}
