import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { getWeatherApiKey } from '../commons/api-keys/api-keys';
import { map } from 'rxjs/operators';
import { MainListService } from '../main-list/main-list.service';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient,
                private mainListService: MainListService) {}

    public searchForCities(searchTerm: string): Promise<any> {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&APPID=${getWeatherApiKey()}&lang=pt`)
            .pipe(map((response: any) => {
                const userCities = this.mainListService.getUserCitiesList();
                if (userCities.includes(response.id)) {
                    Object.assign(response, {alreadyAdded: true});
                }
                return response;
            }))
        .toPromise()
    }
}