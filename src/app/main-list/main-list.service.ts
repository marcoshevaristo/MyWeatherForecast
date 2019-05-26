import { Injectable } from "@angular/core";
import { City } from '../commons/interfaces/city';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { getWeatherApiKey } from '../commons/api-keys/api-keys';

@Injectable()
export class MainListService {

    constructor(private http: HttpClient) { }

    public getCitiesCurrentWeather(): Observable<any> {
        let storageCitiesIds = this.getUserCitiesList();
        if (storageCitiesIds && storageCitiesIds.length) {
            const storageCurrentWeather = this.getCitiesCurrentWeatherStorage();
            if (storageCurrentWeather 
                    && new Date().getTime() > Date.parse(storageCurrentWeather.expirationDate)) {
                const itemsOnStorageAndList = storageCurrentWeather.weatherInfo.list
                    .filter(item => storageCitiesIds.includes(item.id)).map(item => item.id);
                storageCitiesIds = storageCitiesIds.filter(id => !itemsOnStorageAndList.includes(id));
            }

            if (storageCitiesIds && storageCitiesIds.length) {
                const citiesIdsStr = storageCitiesIds.join(',');
                return this.http.get(
                    `http://api.openweathermap.org/data/2.5/group?id=${citiesIdsStr}&units=metric&APPID=${getWeatherApiKey()}&lang=pt`)
                    
            }

            return of(storageCurrentWeather.weatherInfo);
        }

        return of(null);
    }
    
    public getUserCitiesList(): number[] {
        const stored = localStorage.getItem('userCities');
        return JSON.parse(stored ? stored : '[]');
    }

    public addToUserList(cityId: number) {
        let citiesList = this.getUserCitiesList();
        if (!citiesList) {
            citiesList = [];
        }
        citiesList.push(cityId);
        this.setUserCitiesList(citiesList);
    }

    public setCitiesCurrentWeatherStorage(weatherInfo: any) {
        const expirationDate = this.getNewExpirationDateString();
        const currentInfo = this.getCitiesCurrentWeatherStorage();
        localStorage.setItem('citiesCurrentWeather', 
            JSON.stringify({expirationDate, weatherInfo: Object.assign(currentInfo ? currentInfo.weatherInfo : {}, weatherInfo)}));
    }

    private setUserCitiesList(cities: number[]) {
        localStorage.setItem('userCities', JSON.stringify(cities));
    }

    private getCitiesCurrentWeatherStorage(): any {
        const stored = localStorage.getItem('citiesCurrentWeather');
        return JSON.parse(stored ? stored : null);
    }

    private getNewExpirationDateString(): String {
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + 1);
		return expirationDate.toDateString();
	}
}