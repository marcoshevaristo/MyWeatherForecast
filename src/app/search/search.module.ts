import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../commons/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search-service';
import { CardModule } from '../card/card.module';
import { MainListService } from '../main-list/main-list.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    SharedModule,
    SearchRoutingModule,
    FormsModule,
    CardModule
  ],
  providers: [SearchService, MainListService]
})
export class SearchModule { }
