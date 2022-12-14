import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fund } from '../models/Fund';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http: HttpClient) { }

  url = `${environment.apiUrl}/fund`

  addFund(fund: Fund): Observable<any> {
    return this.http.post(this.url, fund);
  }

  getFunds(): Observable<Fund[]> {
    return this.http.get(this.url) as Observable<Fund[]>
  }

  getFund(id: number): Observable<Fund> {
    return this.http.get(`${this.url}/${id}`) as Observable<Fund>
  }

  updateFund(fund: Fund, id: number) {
    return this.http.put(`${this.url}/${id}`, fund)
  }

  deleteFund(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }
}
