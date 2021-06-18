import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-header-weather',
  templateUrl: './header-weather.component.html',
  styleUrls: ['./header-weather.component.scss'],
})
export class HeaderWeatherComponent implements OnInit, OnDestroy {
  private subDate!: Subscription;

  public coortdinatesByCity = '';
  public date = 0;
  public city = 'Ivano-Frankivsk';

  constructor(private weatherService: WeatherService) {}

  public getWeatherByCity(): void {
    this.weatherService
      .getCoordinates(this.coortdinatesByCity)
      .subscribe((res) => {
        this.city = res.name;
      });
  }

  public getCurrentDate(date: number): string {
    return this.weatherService.getRightFormatDate(date);
  }

  ngOnInit(): void {
    this.subDate = this.weatherService.currentDay$.subscribe((data) => {
      this.date = data.dt;
    });
  }

  ngOnDestroy(): void {
    this.subDate.unsubscribe();
  }
}
