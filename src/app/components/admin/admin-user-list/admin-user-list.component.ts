import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { UserService } from "../../../user/user.service";
import { User } from "../../../models/user.model";
import { MentorSignupService } from "../../../services/mentor-signup.service";
import { Mentor } from "../../../models/mentor.model";

@Component({
  selector: "app-admin-user-list",
  templateUrl: "./admin-user-list.component.html",
  styleUrls: ["./admin-user-list.component.css"],
  providers: [UserService, MentorSignupService]
})
export class AdminUserListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private mentorService: MentorSignupService
  ) {}

  users: User[];
  mentors: Mentor[];
  roles = [
    {
      value: "User",
      viewValue: "User"
    },
    {
      value: "Mentor",
      viewValue: "Mentor"
    },
    {
      value: "Admin",
      viewValue: "Admin"
    }
  ];
  role: string = "User" || "Mentor" || "Admin";
  // search: string;
  displayedUserColumns: string[];
  displayedMentorColumns: string[];
  userDataSource = new MatTableDataSource();
  mentorDataSource = new MatTableDataSource();

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.displayedUserColumns = [
        "id",
        "firstName",
        "lastName",
        "userName",
        "contactNumber",
        "password",
        "regCode",
        "role",
        "linkedinUrl",
        "yearsOfExperience",
        "active",
        "confirmedSignUp",
        "resetPassword",
        "resetPasswordDate",
        "createdAt",
        "updatedAt"
      ];
      this.userDataSource.data = this.users;
    });
    this.mentorService.getMentors().subscribe(data => {
      this.mentors = data;
      this.displayedMentorColumns = [
        "id",
        "firstName",
        "lastName",
        "userName",
        "contactNumber",
        "password",
        "regCode",
        "role",
        "linkedinUrl",
        "yearsOfExperience",
        "active",
        "timezone",
        "rating",
        "profile",
        "createdAt",
        "updatedAt"
      ];
      this.mentorDataSource.data = this.mentors;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // if (this.role == "Admin") {
    //   this.search = "Admin";
    // }
    this.mentorDataSource.filter = filterValue;
    this.userDataSource.filter = filterValue;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.mentorDataSource.paginator = this.paginator;
    this.mentorDataSource.sort = this.sort;
    this.userDataSource.paginator = this.paginator;
    this.userDataSource.sort = this.sort;
  }
}

// export interface Userss {
//   sno: number;
//   id: number;
//   name: string;
//   type: string;
//   gender: string;
//   email: string;
//   contact: string;
//   passwordHash: any;
//   block: boolean;
// }

// const USER_DATA: Userss[] = [
//   {
//     "sno": 1,
//     "id": 1,
//     "name": "Wes Bos",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "wes@mod.com",
//     "contact": "+919696522235",
//     "passwordHash": "29821b0e73231264728d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":2,
//     "id": 2,
//     "name": "Dan Abramov",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "dan@mod.com",
//     "contact": "+91985666362",
//     "passwordHash": "545vb0714352428d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":3,
//     "id": 3,
//     "name": "Kelly Vaughn",
//     "type": "Mentor",
//     "gender": "Female",
//     "email": "kelly@mod.com",
//     "contact": "+918544549632",
//     "passwordHash": "78667gb0034352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":4,
//     "id": 4,
//     "name": "Siddharth KP",
//     "type": "User",
//     "gender": "Male",
//     "email": "sid@mod.com",
//     "contact": "++91982235532	",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":5,
//     "id": 5,
//     "name": "Kyle Simpson",
//     "type": "User",
//     "gender": "Male",
//     "email": "kyle@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "65464464v646d4vs28d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":6,
//     "id": 6,
//     "name": "Addy Osmani",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "addy@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":7,
//     "id": 7,
//     "name": "Wes Bos",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "wes@mod.com",
//     "contact": "+919696522235",
//     "passwordHash": "29821b0e73231264728d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":8,
//     "id": 8,
//     "name": "Dan Abramov",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "dan@mod.com",
//     "contact": "+91985666362",
//     "passwordHash": "545vb0714352428d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":9,
//     "id": 9,
//     "name": "Kelly Vaughn",
//     "type": "Mentor",
//     "gender": "Female",
//     "email": "kelly@mod.com",
//     "contact": "+918544549632",
//     "passwordHash": "78667gb0034352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":10,
//     "id": 10,
//     "name": "Siddharth KP",
//     "type": "User",
//     "gender": "Male",
//     "email": "sid@mod.com",
//     "contact": "++91982235532	",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":11,
//     "id": 11,
//     "name": "Kyle Simpson",
//     "type": "User",
//     "gender": "Male",
//     "email": "kyle@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "65464464v646d4vs28d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":12,
//     "id": 12,
//     "name": "Addy Osmani",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "addy@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":13,
//     "id": 13,
//     "name": "Wes Bos",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "wes@mod.com",
//     "contact": "+919696522235",
//     "passwordHash": "29821b0e73231264728d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":14,
//     "id": 14,
//     "name": "Dan Abramov",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "dan@mod.com",
//     "contact": "+91985666362",
//     "passwordHash": "545vb0714352428d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":15,
//     "id": 15,
//     "name": "Kelly Vaughn",
//     "type": "Mentor",
//     "gender": "Female",
//     "email": "kelly@mod.com",
//     "contact": "+918544549632",
//     "passwordHash": "78667gb0034352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":16,
//     "id": 16,
//     "name": "Siddharth KP",
//     "type": "User",
//     "gender": "Male",
//     "email": "sid@mod.com",
//     "contact": "++91982235532	",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":17,
//     "id": 17,
//     "name": "Kyle Simpson",
//     "type": "User",
//     "gender": "Male",
//     "email": "kyle@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "65464464v646d4vs28d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":18,
//     "id": 18,
//     "name": "Addy Osmani",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "addy@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":19,
//     "id": 19,
//     "name": "Wes Bos",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "wes@mod.com",
//     "contact": "+919696522235",
//     "passwordHash": "29821b0e73231264728d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":20,
//     "id": 20,
//     "name": "Dan Abramov",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "dan@mod.com",
//     "contact": "+91985666362",
//     "passwordHash": "545vb0714352428d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":21,
//     "id": 21,
//     "name": "Kelly Vaughn",
//     "type": "Mentor",
//     "gender": "Female",
//     "email": "kelly@mod.com",
//     "contact": "+918544549632",
//     "passwordHash": "78667gb0034352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":22,
//     "id": 22,
//     "name": "Siddharth KP",
//     "type": "User",
//     "gender": "Male",
//     "email": "sid@mod.com",
//     "contact": "++91982235532	",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":23,
//     "id": 23,
//     "name": "Kyle Simpson",
//     "type": "User",
//     "gender": "Male",
//     "email": "kyle@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "65464464v646d4vs28d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":24,
//     "id": 24,
//     "name": "Addy Osmani",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "addy@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":25,
//     "id": 25,
//     "name": "Wes Bos",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "wes@mod.com",
//     "contact": "+919696522235",
//     "passwordHash": "29821b0e73231264728d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":26,
//     "id": 26,
//     "name": "Dan Abramov",
//     "type": "Mentor",
//     "gender": "Male",
//     "email": "dan@mod.com",
//     "contact": "+91985666362",
//     "passwordHash": "545vb0714352428d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":27,
//     "id": 27,
//     "name": "Kelly Vaughn",
//     "type": "Mentor",
//     "gender": "Female",
//     "email": "kelly@mod.com",
//     "contact": "+918544549632",
//     "passwordHash": "78667gb0034352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":28,
//     "id": 28,
//     "name": "Siddharth KP",
//     "type": "User",
//     "gender": "Male",
//     "email": "sid@mod.com",
//     "contact": "+91982235532",
//     "passwordHash": "29821b0e714352428d6bc19a9cb595ad",
//     "block": false
//   },
//   {
//     "sno":29,
//     "id": 29,
//     "name": "Kyle Simpson",
//     "type": "User",
//     "gender": "Male",
//     "email": "kyle@mod.com",
//     "contact": "+919856125532",
//     "passwordHash": "65464464v646d4vs28d6bc19a9cb595ad",
//     "block": true
//   },
//   {
//     "sno":30,
//     "id": 30,
//     "name": "Kelly Vaughn",
//     "type": "Mentor",
//     "gender": "Female",
//     "email": "kelly@mod.com",
//     "contact": "+918544549632",
//     "passwordHash": "78667gb0034352428d6bc19a9cb595ad",
//     "block": false
//   },
// ];
