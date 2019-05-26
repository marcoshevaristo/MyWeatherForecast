import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { getWeatherApiKey } from '../commons/api-keys/api-keys';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) {}

    public searchForCities(searchTerm: string): Promise<any> {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&APPID=${getWeatherApiKey()}&lang=pt`).toPromise()
    }
}