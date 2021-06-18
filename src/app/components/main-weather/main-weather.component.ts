import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherParams } from 'src/app/interfaces/weatherInterface';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss'],
})
export class MainWeatherComponent implements OnInit, OnDestroy {
  private subCurrentWeather!: Subscription;

  public weatherParams: WeatherParams = {
    currentDay: true,
    humidity: 40,
    sunrise: '09:09:09',
    sunset: '10:10:10',
    weather: 'Clouds',
    windSpeed: 5,
    img: {
      description: 'weather',
      icon: '',
    },
    feelsLike: 21,
    temp: 23,
    maxTemp: 27,
    minTemp: 18,
    pressure: 1001,
  };

  public imageSrc = environment.apiImageLink;

  constructor(private weatherService: WeatherService) {}

  public getAverageTemp(max: number, min: number): number {
    return this.weatherService.getAverageTemperature(max, min);
  }

  ngOnInit(): void {
    this.subCurrentWeather = this.weatherService.currentDay$.subscribe(
      (data) => {
        this.weatherParams = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.subCurrentWeather.unsubscribe();
  }
}
