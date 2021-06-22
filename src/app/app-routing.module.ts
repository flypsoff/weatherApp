import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWeatherComponent } from './components/app-weather/app-weather.component';

const routes: Routes = [
  { path: ':city', component: AppWeatherComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
