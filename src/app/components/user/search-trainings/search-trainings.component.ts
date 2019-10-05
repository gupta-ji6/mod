import { Component, OnInit } from "@angular/core";
import {FormControl} from '@angular/forms';
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { TrainingService } from "../../../services/training.service";
import { Training } from "../../../models/training.model";
import { TechnologyService } from "../../../services/technology.service";
import { Technology } from "../../../models/technology.model";

@Component({
  selector: "search-trainings",
  templateUrl: "./search-trainings.component.html",
  styleUrls: ["./search-trainings.component.css"],
  providers: [TrainingService, TechnologyService]
})
export class SearchTrainingsComponent implements OnInit {
  constructor(
    private trainingService: TrainingService,
    public technologyService: TechnologyService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  trainings: Training[];
  technologies: Technology[];
  domains: string[];
  selectedDomain: string;
  query: string;
  startDate;
  endDate;
  noTraining: boolean = false;

  ngOnInit() {
    this.trainingService.getTrainings().subscribe(data => {
      this.trainings = data;
    });
    this.technologyService.getTechnologies().subscribe(data => {
      this.technologies = data;
      this.domains = this.technologies.map(tech => tech.techName);
      this.domains.unshift("All");
    })
  }
  
  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.trainings = this.trainings.filter(training => training.technology.techName.includes(filterValue))
  // }

  filterByDate() {
    let startDate = this.startDate;
    startDate = startDate.replace(/\//g, "-");
    let endDate = this.endDate;
    endDate = endDate.replace(/\//g, "-");

    this.trainingService.filterByDate(startDate, endDate).subscribe(data => {
      if(data.length <=0) {
        this.noTraining = true;
      }
      else {
        if(this.selectedDomain === "All") {
          this.trainings = data;
        }
        else {
          this.trainings = data.filter(training => training.technology.techName === this.selectedDomain);
        }
      }
    })
  }

  enroll(training: Training) {
    let whoLoggedIn = JSON.parse(sessionStorage.getItem('whoLoggedIn'));
    if(whoLoggedIn === null || whoLoggedIn.role !== "User") {
      let message =
          "Looks like you're not logged in as an user.";
          let snackBarRef = this.snackBar.open(message, "Login", {
            duration: 2500
          });
          snackBarRef.onAction().subscribe(() => {
            this.router.navigateByUrl("/user/login");
          });
          snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigateByUrl("/user/login");
          })
    }
    else {
      whoLoggedIn.trainingId = training.id;
      sessionStorage.setItem('whoLoggedIn', JSON.stringify(whoLoggedIn));
      this.router.navigateByUrl("/user/pay");
    }
  }
}
