import { NgModule } from '@angular/core';
import { CardModule } from '../card/card.module';
import { SharedModule } from '../commons/shared.module';
import { MainListRoutingModule } from './main-list-routing.module';
import { MainListComponent } from './main-list.component';
import { MainListService } from './main-list.service';

@NgModule({
  declarations: [MainListComponent],
  imports: [
    SharedModule,
    MainListRoutingModule,
    CardModule
  ],
  providers: [MainListService]
})
export class MainListModule { }
