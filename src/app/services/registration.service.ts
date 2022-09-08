import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserReg} from "../models/UserReg";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  userName: string = "";
  userEmail: string = "";
  userPassword: string = "";

  constructor(private http: HttpClient) { }

  signUp(userName: string, userEmail: string, userPassword: string) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;

    return this.http.post(`http://localhost:8080/user`, new UserReg(userName, userEmail, userPassword));
  }
}
