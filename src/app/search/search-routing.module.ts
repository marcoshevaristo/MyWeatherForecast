import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
          path: '',
          component: SearchComponent
        }
    ])]
})
export class SearchRoutingModule {}
