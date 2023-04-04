import { Component  } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
}
