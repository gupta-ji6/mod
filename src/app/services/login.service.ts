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
  public getUsers(input) {
    return this.http.get<User[]>(
      this.userUrl + "/" + input.role + "/" + input.userName + "/" + input.password
    );
  }

  public getMentors(input) {
    return this.http.get<Mentor[]>(
      this.mentorUrl + "/" + input.role + "/" + input.userName + "/" + input.password
    );
  }
}
