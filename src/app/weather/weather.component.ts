import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'  
})

export class WeatherComponent implements OnInit {
  
  curWeather: any;  
  isHidden: Boolean = true;

  constructor(private weatherService: WeatherService) { } 

  ngOnInit(): void {
  }

  getCurrentWeather(city: string) : void {
    this.weatherService.getCurrentWeather(city).subscribe(data => {
      this.curWeather = data;

      console.log(data);

      this.isHidden = false;
    })
  }

  get weather() {
    return this.curWeather;
  }
}
