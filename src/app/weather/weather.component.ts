import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  weatherForm = this.formBuilder.group({
    city: ['', Validators.required],
  });

  //VARIABLES
  curWeather: any;
  dayWeather: any;
  weekWeather: any;
  weatherCity: string = '';  
  isHidden: Boolean = true;

  //EVENTS
  @Output()
  selectedTabChange: EventEmitter<MatTabChangeEvent> | undefined;

  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  //FUNCTIONS
  myTabSelectedTabChange(changeEvent: MatTabChangeEvent['index']) {
    if (changeEvent === 1) {
      console.log('change index:' + changeEvent);
      let location = this.weatherCity;
      this.getDayWeather(location);
    } else if (changeEvent === 2) {
      console.log('change index:' + changeEvent);
      let location = this.weatherCity;
      this.getWeekWeather(location);
    }
  }

  getCurrentWeather(city: any): void {
    let location = JSON.stringify(city);

    this.weatherService.getCurrentWeather(location).subscribe((data) => {
      this.curWeather = data;
      this.weatherCity = location;

      console.log(this.curWeather);

      this.isHidden = false;
    });
  }

  //DAY STUFF
  getDayEvent() {
    let location = this.weatherCity;
    this.getDayWeather(location);
  }

  getDayWeather(city: any): void {
    let location = JSON.stringify(city);

    this.weatherService.getDayWeather(location).subscribe((data) => {
      this.dayWeather = data;

      console.log(this.dayWeather);
    });
  }

  //WEEK STUFF
  getWeekEvent() {
    let location = this.weatherCity;
    this.getDayWeather(location);
  }

  getWeekWeather(city: any): void {
    let location = JSON.stringify(city);

    this.weatherService.getWeekWeather(location).subscribe((data) => {
      this.weekWeather = data;

      console.log(this.weekWeather);
    });
  }

  //GET CURRENT WEATHER
  get weather() {
    return this.curWeather;
  }

  //GET 24 HOUR WEATHER
  get weatherDay() {
    return this.dayWeather;
  }

  //GET WEEKLY HOUR WEATHER
  get weatherWeek() {
    return this.weekWeather;
  }

  get hours() {
    return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  }

  get days(){
    return [0,1,2,3,4,5,6];
  }
}
