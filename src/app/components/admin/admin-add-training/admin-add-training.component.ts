import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { TrainingService } from "../../../services/training.service";
import { Training } from "../../../models/training.model";
import { MentorSignupService } from "../../../services/mentor-signup.service";
import { Mentor } from "../../../models/mentor.model";
import { SkillService } from "../../../services/skill.service";
import { Skill } from "../../../models/skill.model";
import { TechnologyService } from "../../../services/technology.service";
import { Technology } from "../../../models/technology.model";

@Component({
  selector: "app-admin-add-training",
  templateUrl: "./admin-add-training.component.html",
  styleUrls: ["./admin-add-training.component.css"],
  providers: [TrainingService, MentorSignupService, SkillService, TechnologyService]
})
export class AdminAddTrainingComponent implements OnInit {
  training: Training = new Training();
  mentors: Mentor[];
  mentorNames: string[];
  skills: Skill[];
  technologies: Technology[];

  constructor(
    private trainingService: TrainingService,
    private mentorService: MentorSignupService,
    private skillService: SkillService,
    private technologyService: TechnologyService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.mentorService.getMentors().subscribe(data => {
      this.mentors = data;
      this.mentorNames = this.mentors.map(
        mentor => mentor.firstName + " " + mentor.lastName
      );
    });
    this.skillService.getSkills().subscribe(data => {
      this.skills = data;
    });
    this.technologyService.getTechnologies().subscribe(data => {
      this.technologies = data;
    })
  }

  addTraining() {
    this.trainingService.addTraining(this.training).subscribe(data => {
      let message = "Training is added!";
        let snackBarRef = this.snackBar.open(message, "Close", {
          duration: 1500
        });
        snackBarRef.onAction().subscribe(() => {
          snackBarRef.dismiss();
        });
    },
    error => {
      let snackBarRef = this.snackBar.open(
        "There is an error in your inputs.",
        "Close",
        {
          duration: 5000
        }
      );
    });
  }
}
