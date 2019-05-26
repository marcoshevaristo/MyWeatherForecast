import { NgModule } from '@angular/core';
import { CityCardComponent } from './citycard/citycard.component';
import { SharedModule } from '../commons/shared.module';
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { TileComponent } from '../tile/tile.component';

@NgModule({
  declarations: [CityCardComponent, WeatherCardComponent, TileComponent],
  imports: [
    SharedModule,
    ButtonsModule, WavesModule, CardsFreeModule
  ],
  exports: [CityCardComponent, WeatherCardComponent, TileComponent]
})
export class CardModule { }
