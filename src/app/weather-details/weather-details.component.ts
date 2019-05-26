import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherDetailsService } from './weather-details.service';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {

  private cityId: number;
  public weatherInfo: any;

  constructor(private activatedRoute: ActivatedRoute,
              private weatherDetailsService: WeatherDetailsService,
              private router: Router) { }

  ngOnInit() {
    this.cityId = this.activatedRoute.snapshot.params['cityId'];
    this.weatherDetailsService.getCityWeatherDetails(this.cityId)
      .subscribe(weather => this.mapWeatherInfo(weather));
  }

  backToList() {
    this.router.navigate(['/main-list']);
  }

  private mapWeatherInfo(weather) {
    if (weather && weather.list) {
      this.weatherInfo = {
        city: {id: weather.city.id, name: weather.city.name, country: weather.city.country},
        weatherByDay: weather.list.filter((item, index) => {
          const date = new Date(item.dt_txt);
          const currentDate = new Date();
          return index === 0 || date.getDate() !== currentDate.getDate() && date.getHours() === 18;
        })
      };
    }
  }
}
