import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  FirstWeatherDayInterface,
  OtherWeatherDayInterface,
} from 'src/app/interfaces/weatherInterface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-days-weather',
  templateUrl: './days-weather.component.html',
  styleUrls: ['./days-weather.component.scss'],
})
export class DaysWeatherComponent implements OnInit, OnDestroy {
  private subWeatherDay!: Subscription;

  public days: Array<FirstWeatherDayInterface | OtherWeatherDayInterface> = [];

  constructor(private weatherService: WeatherService) {}

  public setCurrentDay(
    day: FirstWeatherDayInterface | OtherWeatherDayInterface
  ): void {
    this.weatherService.currentDay$.next(day);
  }

  ngOnInit(): void {
    this.subWeatherDay = this.weatherService.days$.subscribe((data) => {
      this.days = data;
    });
  }

  ngOnDestroy(): void {
    this.subWeatherDay.unsubscribe();
  }
}
