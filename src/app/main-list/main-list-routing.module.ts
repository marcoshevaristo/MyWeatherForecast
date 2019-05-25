import { RouterModule, Resolve } from '@angular/router';
import { NgModule, Injectable } from '@angular/core';
import { MainListComponent } from './main-list.component';
import { MainListService } from './main-list.service';
import { map } from "rxjs/operators";

@Injectable()
export class LoadListResolver implements Resolve<any> {

    constructor(private mainListService: MainListService) {}
    
    resolve() {
        return this.mainListService.getCitiesCurrentWeather().pipe(map(weather => {
            this.mainListService.setCitiesCurrentWeatherStorage(weather);
            return weather;
        }));
    }
}

@NgModule({
    imports: [
        RouterModule.forChild([{
          path: '',
          component: MainListComponent,
          resolve: {
              listData: LoadListResolver
          }
        }
    ])]
})
export class MainListRoutingModule {}
