import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'TESTING';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  //this is where we will call the api and get the data to pass to frontend
  // getWeather() : Observable<Array<string>> {
  //   return this.httpClient.get
  // }
}
