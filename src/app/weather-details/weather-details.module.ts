import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../card/card.module';
import { SharedModule } from '../commons/shared.module';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';
import { WeatherDetailsComponent } from './weather-details.component';

@NgModule({
  declarations: [WeatherDetailsComponent],
  imports: [
    SharedModule,
    WeatherDetailsRoutingModule,
    CardModule,
    FormsModule
  ]
})
export class WeatherDetailsModule { }
