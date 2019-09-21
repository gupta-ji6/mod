import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Technology } from '../models/technology.model';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class TechnologyService {

  constructor(private http: HttpClient) { }

  private techUrl = "http://localhost:8022/technologies";

  public getTechnologies() {
    return this.http.get<Technology[]>(this.techUrl);
  }

  public addTechnology(technology) {
    return this.http.post<Technology>(this.techUrl, technology);
  }

}
