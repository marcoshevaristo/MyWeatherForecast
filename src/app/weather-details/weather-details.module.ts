import { NgModule } from '@angular/core';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';
import { SharedModule } from '../commons/shared.module';
import { WeatherDetailsService } from './weather-details.service';

@NgModule({
  declarations: [WeatherDetailsComponent],
  imports: [
    SharedModule,
    WeatherDetailsRoutingModule
  ],
  providers: [WeatherDetailsService]
})
export class WeatherDetailsModule { }
