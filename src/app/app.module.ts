import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainWeatherComponent } from './components/main-weather/main-weather.component';
import { HeaderWeatherComponent } from './components/header-weather/header-weather.component';
import { InfoCardComponent } from './components/main-weather/info-card/info-card.component';
import { DaysWeatherComponent } from './components/days-weather/days-weather.component';
import { DayCardComponent } from './components/days-weather/day-card/day-card.component';

import { TimePipe } from './pipes/time/time.pipe';
import { DatePipe } from './pipes/date/date.pipe';
import { TemperaturePipe } from './pipes/temperature/temperature.pipe';
import { KilometersPipe } from './pipes/kilometers/kilometers.pipe';
import { AverageTemperaturePipe } from './pipes/averageTemperature/average-temperature.pipe';
import { AppWeatherComponent } from './components/app-weather/app-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWeatherComponent,
    HeaderWeatherComponent,
    InfoCardComponent,
    DaysWeatherComponent,
    DayCardComponent,
    TimePipe,
    DatePipe,
    TemperaturePipe,
    KilometersPipe,
    AverageTemperaturePipe,
    AppWeatherComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
