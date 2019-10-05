import { Component, OnInit } from "@angular/core";
import {FormControl} from '@angular/forms';
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { TrainingService } from "../../../services/training.service";
import { Training } from "../../../models/training.model";
import { TechnologyService } from "../../../services/technology.service";
import { Technology } from "../../../models/technology.model";
import { ValueTransformer } from "@angular/compiler/src/util";

@Component({
  selector: 'app-admin-trainings',
  templateUrl: './admin-trainings.component.html',
  styleUrls: ['./admin-trainings.component.css'],
  providers: [TrainingService, TechnologyService]

})
export class AdminTrainingsComponent implements OnInit {

  constructor(private trainingService: TrainingService,
    public technologyService: TechnologyService,
    private router: Router,
    public snackBar: MatSnackBar) { }

    trainings: Training[];
  technologies: Technology[];
  domains: string[];
  selectedDomain: string;
  query: string;
  startDate;
  endDate;

  ngOnInit() {
    this.trainingService.getTrainings().subscribe(data => {
      this.trainings = data;
    });
    this.technologyService.getTechnologies().subscribe(data => {
      this.technologies = data;
      this.domains = this.technologies.map(tech => tech.techName);
      // this.domains.viewValue = this.technologies.map(tech => tech.techName);
      this.domains.unshift("All");
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.trainings = this.trainings.filter(training => training.technology.techName.includes(filterValue))
    console.log(this.trainings);
    console.log(filterValue);
  }

  filterByDate() {
    let startDate = this.startDate;
    // console.log(startDate);
    startDate = startDate.replace(/\//g, "-");
    let endDate = this.endDate;
    // console.log(endDate);
    endDate = endDate.replace(/\//g, "-");
    // console.log(startDate, endDate);

    this.trainingService.filterByDate(startDate, endDate).subscribe(data => {
      if(this.selectedDomain === "All") {
        this.trainings = data;
        // console.log(this.trainings);
      }
      else {
        // console.log(this.selectedDomain);
        this.trainings = data.filter(training => training.technology.techName === this.selectedDomain);
      }
    })
  }

  edit(training: Training) {
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
