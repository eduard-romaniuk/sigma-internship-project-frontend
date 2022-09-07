import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndUser } from '../models/EndUser';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = `${environment.apiUrl}/user`

  getEndUsers(): Observable<EndUser[]> {
    return this.http.get(this.url) as Observable<EndUser[]>
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }

}
