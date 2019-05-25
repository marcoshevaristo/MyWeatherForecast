import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WeatherDetailsComponent } from './weather-details.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
          path: '',
          component: WeatherDetailsComponent
        }
    ])]
})
export class WeatherDetailsRoutingModule {}
