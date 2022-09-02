import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculatedStatisticData } from '../models/CalculatedStatisticData';
import { LatestStatisticData } from '../models/LatestStatisticData';
import { LossDay } from '../models/LossDay';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatisticDataService {

  constructor(private http: HttpClient) { }

  url = `${environment.apiUrl}/statistic-data`

  getLatestStatisticData(): Observable<LatestStatisticData> {
    return this.http.get(`${this.url}/latest`) as Observable<LatestStatisticData>
  }

  getCalculatedStatisticData(lossType?: string): Observable<CalculatedStatisticData> {
    let endpoint = `${this.url}/math`

    if(typeof lossType === "undefined") {
      return this.http.get(endpoint) as Observable<CalculatedStatisticData>
    } else {
      return this.http.get(`${endpoint}?lossType=${lossType}`) as Observable<CalculatedStatisticData>
    }
  }

  getLossDays(lossType?: string): Observable<LossDay[]> {
    let endpoint = `${this.url}/dataset`

    if(typeof lossType === "undefined") {
      return this.http.get(endpoint) as Observable<LossDay[]>
    } else {
      return this.http.get(`${endpoint}?lossType=${lossType}`) as Observable<LossDay[]>
    }
  }

}
