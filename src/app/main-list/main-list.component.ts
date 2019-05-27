import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MainListService } from './main-list.service';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {

  public weatherInfo: any[];
  public isLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private mainListService: MainListService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(switchMap(queryParams => {
      return this.mainListService.getCitiesCurrentWeather([queryParams['newCityId']]);
    })).subscribe(weatherInfo => {
      this.weatherInfo = weatherInfo && weatherInfo.list ? weatherInfo.list : null;
      this.isLoading = false;
    }, () => {this.isLoading = false;})
  }

  removeFromList(cityId) {
    this.mainListService.removeCity(cityId);
    this.weatherInfo = this.weatherInfo.filter(city => city.id !== cityId);
  }

  getCardTitle(cityName: string, cityCountry: string) {
    return cityName + ', ' + cityCountry;
  }

  goToDetails(cityId: number) {
    this.router.navigate([`/weather-details/${cityId}`])
  }
}
