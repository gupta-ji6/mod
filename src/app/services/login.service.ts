import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Mentor } from "../models/mentor.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  private userUrl = "http://localhost:8022/users";
  private mentorUrl = "http://localhost:8022/mentors";

  public getUser(user) {
    return this.http.get<User>(
      this.userUrl + "/" + user.role + "/" + user.userName + "/" + user.password
    );
  }

  public getMentor(mentor) {
    return this.http.get<Mentor>(
      this.mentorUrl + "/" + mentor.role + "/" + mentor.userName + "/" + mentor.password
    );
  }
}
