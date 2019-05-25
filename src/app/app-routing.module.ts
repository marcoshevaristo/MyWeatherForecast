import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main-list'
      },
      {
        path: 'main-list',
        loadChildren: './main-list/main-list.module#MainListModule'
      },
      {
        path: 'search',
        loadChildren: './search/search.module#SearchModule'
      },
      {
        path: 'weather-details/:cityId',
        loadChildren: './weather-details/weather-details.module#WeatherDetailsModule'
    }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
