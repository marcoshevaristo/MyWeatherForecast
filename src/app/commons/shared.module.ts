import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TemperatureConverterPipe } from './pipes/temperature-pipe';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    TemperatureConverterPipe,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MDBBootstrapModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    TemperatureConverterPipe,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
