import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../commons/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
