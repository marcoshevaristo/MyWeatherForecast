import { NgModule } from '@angular/core';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';
import { SharedModule } from '../commons/shared.module';
import { WeatherDetailsService } from './weather-details.service';
import { CardModule } from '../card/card.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WeatherDetailsComponent],
  imports: [
    SharedModule,
    WeatherDetailsRoutingModule,
    CardModule,
    FormsModule
  ],
  providers: [WeatherDetailsService]
})
export class WeatherDetailsModule { }
