import { NgModule } from '@angular/core';
import { CityCardModule } from '../citycard/citycard.module';
import { SharedModule } from '../commons/shared.module';
import { MainListRoutingModule, LoadListResolver } from './main-list-routing.module';
import { MainListComponent } from './main-list.component';
import { MainListService } from './main-list.service';

@NgModule({
  declarations: [MainListComponent],
  imports: [
    SharedModule,
    MainListRoutingModule,
    CityCardModule
  ],
  providers: [MainListService, LoadListResolver]
})
export class MainListModule { }
