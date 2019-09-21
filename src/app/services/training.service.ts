import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Training } from '../models/training.model';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class TrainingService {

  constructor(private http: HttpClient) { }

  private trainingUrl = "http://localhost:8022/trainings";

  public getTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }

}
