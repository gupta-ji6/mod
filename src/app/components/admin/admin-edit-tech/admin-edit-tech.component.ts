import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { TechnologyService } from "../../../services/technology.service";
import { Technology } from "../../../models/technology.model";

@Component({
  selector: "app-admin-edit-tech",
  templateUrl: "./admin-edit-tech.component.html",
  styleUrls: ["./admin-edit-tech.component.css"],
  providers: [TechnologyService]
})
export class AdminEditTechComponent implements OnInit {
  constructor(
    private router: Router,
    private technologyService: TechnologyService,
    public snackBar: MatSnackBar
  ) {}

  technologies: Technology[];

  technology: Technology = new Technology();

  ngOnInit() {
    this.technologyService.getTechnologies().subscribe(data => {
      this.technologies = data;
    });
  }

  addTechnology() {
    this.technologyService.addTechnology(this.technology).subscribe(
      data => {
        let message = this.technology.techName + " is added!";
        let snackBarRef = this.snackBar.open(message, "Refresh", {
          duration: 5000
        });
        snackBarRef.onAction().subscribe(() => {
          window.location.reload();
        });
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      },
      error => {
        let snackBarRef = this.snackBar.open(
          "You entered invalid fields.",
          "Close",
          {
            duration: 5000
          }
        );
      }
    );
  }

  // technologies = [
  //   {
  //     name: "Angular",
  //     domain: "Front-End",
  //     img: "https://cdn.svgporn.com/logos/angular-icon.svg",
  //     description: "Angular is a platform for building mobile and desktop web applications.",
  //     fee: 2999,
  //   },
  //   {
  //     name: "Amazon AWS",
  //     domain: "Back-end",
  //     img: "https://cdn.svgporn.com/logos/aws.svg",
  //     description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
  //     fee: 1499,
  //   },
  //   {
  //     name: "Bootstrap",
  //     domain: "CSS Framework",
  //     img: "https://cdn.svgporn.com/logos/bootstrap.svg",
  //     description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
  //     fee: 2449,
  //   },
  //   {
  //     name: "Node JS",
  //     domain: "Back-end",
  //     img: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
  //     description: "Node.js is an open-source, cross-platform JavaScript run-time environment.",
  //     fee: 4299,
  //   },
  //   {
  //     name: "React",
  //     domain: "Front-End",
  //     img: "https://cdn.svgporn.com/logos/react.svg",
  //     description: "React is a JavaScript library for building user interfaces.",
  //     fee: 3499,
  //   },
  //   {
  //     name: "Flutter",
  //     domain: "Mobile App",
  //     img: "https://cdn.svgporn.com/logos/flutter.svg",
  //     description: "Flutter is an open-source mobile application development framework created by Google.",
  //     fee: 1599,
  //   }
  // ];

  techs = [
    {
        "techName": "Front End",
        "price": 2499.0,
        "duration": "60",
        "description": "The layer above the back end is the front end and it includes all software or hardware that is part of a user interface.",
        "logo": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/portfolio_website_lidw.svg",
    },
    {
        "techName": "Back End",
        "price": 4999.0,
        "duration": "75",
        "description": "The back-end, or the \"server-side\", is basically how the site works, updates and changes.",
        "logo": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/solution_mindset_34bi.svg",
    },
    {
        "techName": "Data Analytics",
        "price": 1499.0,
        "duration": "30",
        "description": "Data analytics refers to qualitative and quantitative techniques and processes used to enhance productivity and business gain.",
        "logo": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/functions_egi3.svg",
    },
    {
        "techName": "Mobile Application Development",
        "price": 2499.0,
        "duration": "60",
        "description": "Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices such as smartphones or tablets.",
        "logo": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/image_focus_wm20.svg",
    },
    {
        "techName": "Java Full Stack",
        "price": 6599.0,
        "duration": "90",
        "description": " A full stack developer is an engineer who can handle all the work of databases, servers, systems engineering, and clients.",
        "logo": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/feedback_h2ft.svg",
    },
    {
        "techName": "Ethical Hacking",
        "price": 2099.0,
        "duration": "45",
        "description": "The term \"white hat\" in Internet slang refers to an ethical computer hacker, or a computer security expert, who specializes in penetration testing and in other testing methodologies that ensures the security of an organization's information systems",
        "logo": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/hacker_mind_6y85.svg",
    },
    {
        "techName": "MEAN Stack Develpment",
        "price": 7999.0,
        "duration": "60",
        "description": "Mean stack refers to a collection of JavaScript technologies used to develop web applications",
        "logo": "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/react_y7wq.svg",
    }
];
  domains = [
    { value: "Front End", viewValue: "Front End" },
    { value: "Back End", viewValue: "Back End" },
    { value: "Programming Language", viewValue: "Programming Language" },
    { value: "Library", viewValue: "Library" },
    { value: "Database", viewValue: "Database" },
    { value: "Mobile App", viewValue: "Mobile App" },
    { value: "Framework", viewValue: "Framework" },
    { value: "API", viewValue: "API" }
  ];
}
