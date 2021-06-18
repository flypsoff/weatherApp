import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainWeatherComponent } from './components/main-weather/main-weather.component';
import { HeaderWeatherComponent } from './components/header-weather/header-weather.component';
import { InfoCardComponent } from './components/main-weather/info-card/info-card.component';
import { DaysWeatherComponent } from './components/days-weather/days-weather.component';
import { DayCardComponent } from './components/days-weather/day-card/day-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWeatherComponent,
    HeaderWeatherComponent,
    InfoCardComponent,
    DaysWeatherComponent,
    DayCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
