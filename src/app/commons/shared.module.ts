import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TemperatureConverterPipe } from './pipes/temperature-pipe';

@NgModule({
  declarations: [TemperatureConverterPipe],
  imports: [
    CommonModule,
    IonicModule,
    MDBBootstrapModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    TemperatureConverterPipe
  ]
})
export class SharedModule { }
