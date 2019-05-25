import { NgModule } from '@angular/core';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';
import { SharedModule } from '../commons/shared.module';

@NgModule({
  declarations: [WeatherDetailsComponent],
  imports: [
    SharedModule,
    WeatherDetailsRoutingModule
  ]
})
export class WeatherDetailsModule { }
