import { Injectable } from "@angular/core";
import { City } from '../commons/interfaces/city';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { getWeatherApiKey } from '../commons/api-keys/api-keys';

@Injectable()
export class MainListService {

    constructor(private http: HttpClient) { }

    public getCitiesCurrentWeather(citiesIds?: number[]): Observable<any> {
        let citiesIdsToSearch = this.isValidNumberArray(citiesIds) ? citiesIds : this.getUserCitiesList();
        if (citiesIdsToSearch && citiesIdsToSearch.length) {
            if (citiesIdsToSearch && citiesIdsToSearch.length) {
                const citiesIdsStr = citiesIdsToSearch.join(',');
                return this.http.get(
                    `http://api.openweathermap.org/data/2.5/group?id=${citiesIdsStr}&units=metric&APPID=${getWeatherApiKey()}&lang=pt`)  
            }
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

    public removeCity(cityId: number) {
        const storedList = this.getUserCitiesList();
        this.setUserCitiesList(storedList.filter(item => item !== cityId));
    }

    private isValidNumberArray(ids: number[]) {
        return ids && ids.length && !isNaN(ids[0])
    }

    private setUserCitiesList(cities: number[]) {
        localStorage.setItem('userCities', JSON.stringify(cities));
    }

    private getNewExpirationDateString(): String {
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + 1);
		return expirationDate.toDateString();
	}
}