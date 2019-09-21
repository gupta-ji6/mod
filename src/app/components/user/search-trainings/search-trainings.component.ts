import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TrainingService } from "../../../services/training.service";
import { Training } from "../../../models/training.model";

@Component({
  selector: "search-trainings",
  templateUrl: "./search-trainings.component.html",
  styleUrls: ["./search-trainings.component.css"],
  providers: [TrainingService]
})
export class SearchTrainingsComponent implements OnInit {
  constructor(
    private router: Router,
    private trainingService: TrainingService
  ) {}

  trainings: Training[];
  query: string;

  ngOnInit() {
    this.trainingService.getTrainings().subscribe(data => {
      this.trainings = data;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  }

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

  hideResults = true;

  showResults() {
    this.hideResults = false;
  }
}
