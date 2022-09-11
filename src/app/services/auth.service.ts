import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { EndUser } from 'src/app/models/EndUser';
import { Role } from '../enums/role';
import {Subscription} from "../enums/subscription";
import {Locale} from "../models/Locale";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  TOKEN = ""
  ROLE = Role.ANONYMOUS;
  username = "";
  subscription = Subscription.OFF;
  locale = "";

  public currentUser: EndUser | undefined;

  authToken: string = ""

  constructor(private http: HttpClient) {
  }

  authenticationService(username: string, password: string) {
    this.authToken = this.createBasicAuthToken(username, password)
    const response = this.http
      .get(`${environment.apiUrl}/user/login`,
        { headers: { 'Authorization': this.authToken } }) as Observable<EndUser>;
    return response.pipe(map((data) => {
      this.ROLE = data.role;
      this.username = data.name;
      this.subscription = data.subscription;
      this.locale = data.locale.name;
      this.registerSuccessfulLogin(username);
    }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: string) {
    sessionStorage.setItem("ROLE", this.ROLE);
    sessionStorage.setItem("USERNAME", this.username);
    sessionStorage.setItem("SUBSCRIPTION", this.subscription);
    sessionStorage.setItem("LOCALE", this.locale);
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(this.TOKEN, this.authToken);
  }

  getTokenSession() {
    return sessionStorage.getItem(this.TOKEN)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem("ROLE");
    this.authToken = "";
    this.currentUser = undefined;
    this.ROLE = Role.ANONYMOUS;
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

  getCurrentUserRole() {
    let role = sessionStorage.getItem("ROLE")
    if (role === null) return Role.ANONYMOUS
    return role
  }

  getCurrentUserName() {
    let userName = sessionStorage.getItem("USERNAME")
    if (userName === null) return ''
    return userName
  }

  getCurrentUserLocale() {
    let userLocale = sessionStorage.getItem("LOCALE")
    if (userLocale === null) return "English";
    return userLocale
  }

  getCurrentUserSubscription() {
    let userSubscription = sessionStorage.getItem("SUBSCRIPTION")
    if (userSubscription === null) return Subscription.OFF
    return userSubscription
  }
}
