import { NgModule } from '@angular/core';
import { CityCardComponent } from './citycard/citycard.component';
import { SharedModule } from '../commons/shared.module';
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [CityCardComponent, WeatherCardComponent],
  imports: [
    SharedModule,
    ButtonsModule, WavesModule, CardsFreeModule
  ],
  exports: [CityCardComponent, WeatherCardComponent]
})
export class CardModule { }
