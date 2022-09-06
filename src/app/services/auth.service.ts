import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  TOKEN = ""

  public username: string = "";
  public password: string = "";

  authToken: string = ""

  constructor(private http: HttpClient) {
  }

  authenticationService(username: string, password: string) {
    this.authToken = this.createBasicAuthToken(username, password)
    return this.http.get(`${environment.apiUrl}/user/login`,
      { headers: { 'Authorization': this.authToken } }).pipe(map((res) => {
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
}
