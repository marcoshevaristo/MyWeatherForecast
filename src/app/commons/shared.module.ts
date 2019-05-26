import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MDBBootstrapModule
  ],
  exports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
