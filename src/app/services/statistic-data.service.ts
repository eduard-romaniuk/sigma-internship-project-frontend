import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculatedStatisticData } from '../models/CalculatedStatisticData';
import { LatestStatisticData } from '../models/LatestStatisticData';
import { LossDay } from '../models/LossDay';

@Injectable({
  providedIn: 'root'
})
export class StatisticDataService {

  username: string = "admin@email.com";
  password: string = "admin";

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .append('Authorization', "Basic " + btoa(`${this.username}:${this.password}`))

  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/statistic-data'

  getLatestStatisticData(): Observable<LatestStatisticData> {
    return this.http.get(`${this.url}/latest`) as Observable<LatestStatisticData>
  }

  getCalculatedStatisticData(lossType?: string): Observable<CalculatedStatisticData> {
    let endpoint = `${this.url}/math`
    
    if(typeof lossType === "undefined") {
      return this.http.get(endpoint, this.httpOptions) as Observable<CalculatedStatisticData>
    } else {
      return this.http.get(`${endpoint}?lossType=${lossType}`, this.httpOptions) as Observable<CalculatedStatisticData>
    }
  }

  getLossDays(lossType?: string): Observable<LossDay[]> {
    let endpoint = `${this.url}/dataset`

    if(typeof lossType === "undefined") {
      return this.http.get(endpoint, this.httpOptions) as Observable<LossDay[]>
    } else {
      return this.http.get(`${endpoint}?lossType=${lossType}`, this.httpOptions) as Observable<LossDay[]>
    }
  }

}
