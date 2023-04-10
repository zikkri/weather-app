import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  weatherForm = this.formBuilder.group({
    city: [''],
  });

  curWeather: any;
  dayWeather: any;
  weekWeather: any;
  weatherCity: string = '';
  isHidden: Boolean = true;

  @Output()
  selectedTabChange: EventEmitter<MatTabChangeEvent> | undefined;

  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  myTabSelectedTabChange(changeEvent: MatTabChangeEvent["index"]) {
    if (changeEvent === 1) {
      console.log("change index:" + changeEvent)
      let location = this.weatherCity;
      this.getDayWeather(location);
    } else if (changeEvent === 2) {
      console.log("change index:" + changeEvent)
      let location = this.weatherCity;
      this.getWeekWeather(location);
    }
  }

  //CURRENT STUFF
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
}
