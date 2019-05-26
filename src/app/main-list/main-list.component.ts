import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainListService } from './main-list.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {

  public weatherInfo: any[];
  public isLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private mainListService: MainListService) { }

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
}
