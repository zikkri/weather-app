import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const API_URL = 'http://api.weatherstack.com';
// const API_KEY = '0672ee8263d1e089b2ded819150e2f6f';

const API_URL = 'http://api.weatherapi.com/v1';
const API_KEY = '632510daf8de42f7afb212430231104  ';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string): Observable<Array<string>> {
    //http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London

    return this.httpClient.get<Array<string>>(
      `${API_URL}/current.json?key=${API_KEY}&q=${city}`
    );
  }

  getDayWeather(city: string): Observable<Array<string>> {
    //this isnt proper yet
    return this.httpClient.get<Array<string>>(
      `${API_URL}/forecast.json?key=${API_KEY}&q=${city}&hours=24`
    );
  }

  getWeekWeather(city: string): Observable<Array<string>> {
    // http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7
    return this.httpClient.get<Array<string>>(
      `${API_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`
    );
  }
}
