import { NgModule } from '@angular/core';
import { CityCardComponent } from './citycard.component';
import { SharedModule } from '../commons/shared.module';
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [CityCardComponent],
  imports: [
    SharedModule,
    ButtonsModule, WavesModule, CardsFreeModule
  ],
  exports: [CityCardComponent]
})
export class CityCardModule { }
