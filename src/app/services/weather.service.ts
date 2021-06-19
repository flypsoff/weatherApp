import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import {
  FirstWeatherDayInterface,
  OtherWeatherDayInterface,
} from '../interfaces/weatherInterface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public days$ = new Subject<any>();
  public currentDay$ = new Subject<any>();

  constructor(private http: HttpClient) {}

  public getCoordinates(city: string): Observable<any> {
    return this.http
      .get(`${environment.apiDataByCity}?q=${city}&appid=${environment.apiKey}`)
      .pipe(
        map((res: any) => res[0]),
        mergeMap((value) => {
          return this.getWeather(value.lat, value.lon).pipe(map(() => value));
        })
      );
  }

  public getWeather(
    lat: number = 48.9225,
    lon: number = 24.7103
  ): Observable<any> {
    return this.http
      .get(
        `${environment.apiDataByLocation}?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${environment.apiKey}`
      )
      .pipe(
        map((res: any) => {
          const daysOfWeather: Array<
            FirstWeatherDayInterface | OtherWeatherDayInterface
          > = [];

          const firstWeatherDay: FirstWeatherDayInterface = {
            humidity: res.current.humidity,
            feelsLike: res.current.feels_like,
            pressure: res.current.pressure,
            temp: res.current.temp,
            weather: res.current.weather[0].main,
            windSpeed: res.current.wind_speed * 1.6,
            sunrise: res.current.sunrise,
            sunset: res.current.sunset,
            dt: res.current.dt,
            currentDay: true,
            img: {
              icon: res.current.weather[0].icon,
              description: res.current.weather[0].description,
            },
          };

          res.daily.map((item: any, index: number) => {
            if (index === 0) {
              daysOfWeather.push(firstWeatherDay);
              return;
            }

            const otherWeatherDay: OtherWeatherDayInterface = {
              currentDay: false,
              dt: item.dt,
              humidity: item.humidity,
              maxTemp: item.temp.max,
              minTemp: item.temp.min,
              sunrise: item.sunrise,
              sunset: item.sunset,
              weather: item.weather[0].main,
              windSpeed: item.wind_speed * 1.6,
              img: {
                icon: item.weather[0].icon,
                description: item.weather[0].description,
              },
            };

            daysOfWeather.push(otherWeatherDay);
          });

          this.days$.next(daysOfWeather);
          this.currentDay$.next(firstWeatherDay);
          return res;
        })
      );
  }
}
