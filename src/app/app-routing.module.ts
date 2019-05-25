import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'weather-forecast', 
    pathMatch: 'full'
  },
  {
    path: 'weather-forecast',
    children: [
    { path: '', redirectTo: 'main-list', pathMatch: 'full' },
    {
      path: '',
      loadChildren: './main-list/main-list.module#MainListModule'
    }]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
