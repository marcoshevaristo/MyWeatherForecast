import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherApiService } from '../commons/services/weather-api.service';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {

  public weatherInfo: any;
  public isLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private weatherApiService: WeatherApiService,
              private router: Router) { }

  ngOnInit() {
    this.weatherApiService.getNextFiveDaysForecast(this.activatedRoute.snapshot.params['cityId'])
      .subscribe(weather => {
        this.weatherInfo = weather;
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }

  backToList() {
    this.router.navigate(['/main-list']);
  }
}
