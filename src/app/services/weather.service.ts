import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://api.weatherstack.com';
const API_KEY = '0672ee8263d1e089b2ded819150e2f6f';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  //this is where we will call the api and get the data to pass to frontend
  //think this needs to have its own class
  getCurrentWeather(city: string) : Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${API_URL}/current?${API_KEY}&${city}`)
  }
}
