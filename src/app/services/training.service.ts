import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Training } from "../models/training.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class TrainingService {
  constructor(private http: HttpClient) {}

  private trainingUrl = "http://localhost:8022/trainings";

  public getTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }

  public getTrainingById(id) {
    return this.http.get<Training>(this.trainingUrl + "/" + id)
  }

  public addTraining(training: Training) {
    return this.http.post<Training>(this.trainingUrl, training);
  }

  public getUserTrainings(userId) {
    return this.http.get<Training[]>(
      this.trainingUrl + "/findTrainingByUserId/" + userId
    );
  }

  public putTraining(training: Training) {
    return this.http.put<Training>(this.trainingUrl + "/" + training.id, training);
  }

  public getMentorTrainings(mentorId) {
    return this.http.get<Training[]>(
      this.trainingUrl + "/findTrainingByMentorId/" + mentorId
    );
  }
  public filterByDate(startDate, endDate) {
    return this.http.get<Training[]>(
      this.trainingUrl + "/findByStartDateBetween/" + startDate + "/" + endDate
    );
  }
}
