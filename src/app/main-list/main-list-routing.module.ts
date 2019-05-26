import { RouterModule, Resolve } from '@angular/router';
import { NgModule, Injectable } from '@angular/core';
import { MainListComponent } from './main-list.component';
import { MainListService } from './main-list.service';
import { map } from "rxjs/operators";

@NgModule({
    imports: [
        RouterModule.forChild([{
          path: '',
          component: MainListComponent
        }
    ])]
})
export class MainListRoutingModule {}
