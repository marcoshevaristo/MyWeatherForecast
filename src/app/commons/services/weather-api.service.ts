import { Injectable } from "@angular/core";
import { getWeatherApiKey } from '../api-keys/api-keys';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherApiService {

    constructor(private http: HttpClient) {}

    public getCurrentWeatherInfo(citiesIds: number[]) {
        return this.http.get(
            `http://api.openweathermap.org/data/2.5/group?id=${citiesIds}&units=metric&APPID=${getWeatherApiKey()}&lang=pt`);
    }

    public getNextFiveDaysForecast(cityId: number) {
        const requests = [
            this.getCurrentWeatherInfo([cityId]),
            this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${getWeatherApiKey()}&units=metric&lang=pt`)
        ]
        return forkJoin(requests).pipe(map(([current, fiveDays]) => {
            let currentWeather = (current as any);
            currentWeather = currentWeather && currentWeather.list ? currentWeather.list[0] : null;
            return this.mapFiveDayWeatherInfo(currentWeather, fiveDays);
        }))
    }

    private mapFiveDayWeatherInfo(current, weatherInfo) {
        if (current && weatherInfo && weatherInfo.list) {
            current.dt_txt = new Date();
            let weatherList = [current];
            weatherList = weatherList.concat(weatherInfo.list.filter((item) => {
                const date = new Date(item.dt_txt);
                const currentDate = new Date();
                return date.getDate() !== currentDate.getDate() && date.getHours() === 18;
            }));
          return {
            city: {
                id: weatherInfo.city.id, 
                name: weatherInfo.city.name, 
                country: weatherInfo.city.country
            },
            weatherByDay: weatherList
          };
        }
      }
}