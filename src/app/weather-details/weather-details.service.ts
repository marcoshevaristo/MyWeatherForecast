import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { getWeatherApiKey } from '../commons/api-keys/api-keys';

@Injectable()
export class WeatherDetailsService {

    constructor(private http: HttpClient) { }

    public getCityWeatherDetails(cityId: number) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${getWeatherApiKey()}`);
    }
}