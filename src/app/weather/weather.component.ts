import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  // public weatherForm = new FormGroup({
  //   city: new FormControl(''),
  // });

  weatherForm = this.formBuilder.group({
    city: [''],
  });

  curWeather: any;
  isHidden: Boolean = true;

  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  getCurrentWeather(city: any): void {
    let location: string;
    location = JSON.stringify(city);

    this.weatherService.getCurrentWeather(location).subscribe((data) => {
      this.curWeather = data;

      console.log(this.curWeather);

      this.isHidden = false;
    });
  }

  get weather() {
    return this.curWeather;
  }
}
