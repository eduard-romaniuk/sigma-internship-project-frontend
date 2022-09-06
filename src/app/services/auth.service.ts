import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { EndUser } from 'src/app/models/EndUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  TOKEN = ""

  public username: string = "";
  public password: string = "";

  public currentUser: EndUser | undefined;

  authToken: string = ""

  constructor(private http: HttpClient) {
  }

  authenticationService(username: string, password: string) {
    this.authToken = this.createBasicAuthToken(username, password)
    const response = this.http
      .get(`${environment.apiUrl}/user/login`,
        { headers: { 'Authorization': this.authToken } });

    response.subscribe((data: any) => {
      this.currentUser = data;
    })
    return response.pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    sessionStorage.setItem(this.TOKEN, this.authToken)
  }

  getTokenSession() {
    return sessionStorage.getItem(this.TOKEN)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = "";
    this.password = "";
    this.authToken = "";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    return user !== null;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
