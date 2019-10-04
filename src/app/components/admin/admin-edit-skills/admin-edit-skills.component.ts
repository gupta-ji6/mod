import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { SkillService } from '../../../services/skill.service';
import { Skill } from '../../../models/skill.model';

@Component({
  selector: 'app-admin-edit-skills',
  templateUrl: './admin-edit-skills.component.html',
  styleUrls: ['./admin-edit-skills.component.css'],
  providers: [SkillService]
})
export class AdminEditSkillsComponent implements OnInit {

  constructor(private router: Router,
    private skillService: SkillService,
    public snackBar: MatSnackBar) { }

    skills: Skill[];

    skill: Skill = new Skill();

  ngOnInit() {
    this.skillService.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  addSkill() {
    this.skillService.addSkill(this.skill).subscribe(
      data => {
        let message = this.skill.name + " is added!";
        let snackBarRef = this.snackBar.open(message, "Refresh", {
          duration: 1500
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

//   skills = [
//     {
//       "createdAt": 1568961250000,
//       "updatedAt": 1568961250000,
//       "id": 1,
//       "name": "Angular",
//       "toc": "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google.",
//       "prerequisites": "HTML, CSS, JS",
//       "logo": "https://cdn.svgporn.com/logos/angular-icon.svg",
//       "trainings": []
//   },
//   {
//       "createdAt": 1568961370000,
//       "updatedAt": 1568961370000,
//       "id": 2,
//       "name": "Spring",
//       "toc": "The Spring Framework is an application framework and inversion of control container for the Java platform.",
//       "prerequisites": "Java",
//       "logo": "https://cdn.svgporn.com/logos/spring.svg",
//       "trainings": []
//   },
//   {
//       "createdAt": 1568961431000,
//       "updatedAt": 1568961431000,
//       "id": 3,
//       "name": "Hibernate",
//       "toc": "Hibernate ORM is an object-relational mapping tool for the Java programming language.",
//       "prerequisites": "Java, SQL",
//       "logo": "https://cdn.svgporn.com/logos/hibernate.svg",
//       "trainings": []
//   }
// ];

  domains = [
    {value: 'Front End', viewValue: 'Front End'},
    {value: 'Back End', viewValue: 'Back End'},
    {value: 'Programming Language', viewValue: 'Programming Language'},
    {value: 'Library', viewValue: 'Library'},
    {value: 'Database', viewValue: 'Database'},
    {value: 'Mobile App', viewValue: 'Mobile App'},
    {value: 'Framework', viewValue: 'Framework'},
    {value: 'API', viewValue: 'API'}
  ];

  proficiency = [
    {
      value: 'Expert',
      viewValue: 'Expert'
    },
    {
      value: 'Intermediate',
      viewValue: 'Intermediate'
    },
    {
      value: 'Amateur',
      viewValue: 'Amateur'
    },
  ]
  

}
