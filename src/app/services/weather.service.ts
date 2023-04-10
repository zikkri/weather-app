import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://api.weatherstack.com';
const API_KEY = '0672ee8263d1e089b2ded819150e2f6f';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${API_URL}/current?access_key=${API_KEY}&query=${city}`
    );
  }

  getDayWeather(city: string): Observable<Array<string>> {
    //this isnt proper yet
    return this.httpClient.get<Array<string>>(
      `${API_URL}/forecast?access_key=${API_KEY}&query=${city}&forecast_days=1&hourly=1`
    );
  }

  getWeekWeather(city: string): Observable<Array<string>> {
    //this isnt proper yet
    return this.httpClient.get<Array<string>>(
      `${API_URL}/forecast?access_key=${API_KEY}&query=${city}&forecast_days=7&interval=24`
    );
  }
}
