import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainListComponent } from './main-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
          path: 'main-list',
          component: MainListComponent,
          children: [
              {
                  path: 'search',
                  loadChildren: '../search/search.module#SearchModule'
              },
              {
                  path: 'weather-details/:cityId',
                  loadChildren: '../weather-details/weather-details.module#WeatherDetailsModule'
              }
          ]
        }
    ])]
})
export class MainListRoutingModule {}
