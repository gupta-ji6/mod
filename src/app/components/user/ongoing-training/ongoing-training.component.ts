import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { MatSnackBar } from "@angular/material";
import { TrainingService } from "../../../services/training.service";
import { Training } from "../../../models/training.model";
import { Mentor } from "../../../models/mentor.model";
import { User } from "../../../models/user.model";

@Component({
  selector: "app-ongoing-training",
  templateUrl: "./ongoing-training.component.html",
  styleUrls: ["./ongoing-training.component.css"],
  providers: [TrainingService]
})
export class OngoingTrainingComponent implements OnInit {
  constructor(
    private trainingService: TrainingService,
    public snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) {}

  whoLoggedIn: User | Mentor;
  trainings: Training[];
  training: Training = new Training();
  progress: number;
  dataSource = new MatTableDataSource();
  displayedColumns = [
    "startDate",
    "endDate",
    "startTime",
    "endTime",
    "status",
    "progress",
    "fees",
    "amountRecieved",
    "rating",
    "mentor",
    "skill",
    "technology",
    "update"
  ];

  ngOnInit() {
    this.whoLoggedIn = JSON.parse(sessionStorage.getItem("whoLoggedIn"));
    this.trainingService
      .getUserTrainings(this.whoLoggedIn.id)
      .subscribe(data => {
        this.trainings = data;
        this.dataSource.data = this.trainings;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  updateProgress(training: Training) {
    this.training = training;

    let dialogRef = this.dialog.open(UpdateProgressDialog, {
      width: "30vw",
      data: this.training,
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.training.progress = result;
      this.trainingService.putTraining(this.training).subscribe(data => {
        let message =
          "Your training progress has been updated to " + this.training.progress + "%.";
        let snackBarRef = this.snackBar.open(message, "View", {
          duration: 2500
        });
        snackBarRef.onAction().subscribe(() => {
          window.location.reload();
        });
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
    });
  }
}

@Component({
  selector: "update-progress-dialog-dialog",
  templateUrl: "update-progress-dialog.html"
})
export class UpdateProgressDialog {
  constructor(
    public dialogRef: MatDialogRef<UpdateProgressDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
