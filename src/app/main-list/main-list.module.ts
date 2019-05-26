import { NgModule } from '@angular/core';
import { SharedModule } from '../commons/shared.module';
import { MainListRoutingModule, LoadListResolver } from './main-list-routing.module';
import { MainListComponent } from './main-list.component';
import { MainListService } from './main-list.service';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [MainListComponent],
  imports: [
    SharedModule,
    MainListRoutingModule,
    CardModule
  ],
  providers: [MainListService, LoadListResolver]
})
export class MainListModule { }
