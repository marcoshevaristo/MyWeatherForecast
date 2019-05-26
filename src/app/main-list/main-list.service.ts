import { Injectable } from "@angular/core";
import { City } from '../commons/interfaces/city';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { getWeatherApiKey } from '../commons/api-keys/api-keys';

@Injectable()
export class MainListService {

    constructor(private http: HttpClient) { }

    public getCitiesCurrentWeather(): Observable<any> {
        const storageCities = this.getUserCitiesList();
        if (storageCities && storageCities.length) {
            let idsToRequest = storageCities.map(city => city.id);
            const storageCurrentWeather = this.getCitiesCurrentWeatherStorage();
            if (storageCurrentWeather 
                    && new Date().getTime() > Date.parse(storageCurrentWeather.expirationDate)) {
                const itemsOnStorageAndList = storageCurrentWeather.weatherInfo.list
                    .filter(item => idsToRequest.includes(item.id)).map(item => item.id);
                idsToRequest = idsToRequest.filter(id => !itemsOnStorageAndList.includes(id));
            }

            if (idsToRequest && idsToRequest.length) {
                const citiesIdsStr = idsToRequest.join(',');
                return this.http.get(
                    `http://api.openweathermap.org/data/2.5/group?id=${citiesIdsStr}&units=metric&APPID=${getWeatherApiKey()}&lang=pt`)
                    
            }

            return of(storageCurrentWeather.weatherInfo);
        }

        return of(null);
    }
    
    public getUserCitiesList(): City[] {
        // const stored = localStorage.getItem('userCities');
        // return JSON.parse(stored ? stored : '{}');
        return [
            {
                id: 6323074,
                name: 'Blumenau'
            },
            {
                id: 3462535,
                name: 'Gaspar'
            },
            {
                id: 3461316,
                name: 'Indaial'
            }
        ]
    }

    private setUserCitiesList(cities: City[]) {
        localStorage.setItem('userCities', JSON.stringify(cities));
    }

    public setCitiesCurrentWeatherStorage(weatherInfo: any) {
        const expirationDate = this.getNewExpirationDateString();
        const currentInfo = this.getCitiesCurrentWeatherStorage();
        localStorage.setItem('citiesCurrentWeather', 
            JSON.stringify({expirationDate, weatherInfo: Object.assign(currentInfo ? currentInfo.weatherInfo : {}, weatherInfo)}));
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