import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherDetailsService } from './weather-details.service';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {

  public weatherInfo: any;
  public isLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private weatherDetailsService: WeatherDetailsService,
              private router: Router) { }

  ngOnInit() {
    this.weatherDetailsService.getCityWeatherDetails(this.activatedRoute.snapshot.params['cityId'])
      .subscribe(weather => {
        this.mapWeatherInfo(weather);
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
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
