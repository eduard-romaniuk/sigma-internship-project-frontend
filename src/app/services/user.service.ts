import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndUser } from '../models/EndUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/user'

  getEndUsers(): Observable<EndUser[]> {
    return this.http.get(this.url) as Observable<EndUser[]>
  }
  
}
