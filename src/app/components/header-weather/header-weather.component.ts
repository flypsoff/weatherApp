import { Location } from '@angular/common';
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
  private subCity!: Subscription;

  public coortdinatesByCity = '';
  public date = 0;
  public city = '';

  constructor(
    private weatherService: WeatherService,
    private location: Location
  ) {}

  public getWeatherByCity(): void {
    this.weatherService
      .getCoordinates(this.coortdinatesByCity)
      .subscribe((res) => {
        this.location.go(res.name);
      });
  }

  ngOnInit(): void {
    this.subDate = this.weatherService.currentDay$.subscribe((data) => {
      this.date = data.dt;
    });
    this.subCity = this.weatherService.city$.subscribe((city) => {
      this.city = city;
    });
  }

  ngOnDestroy(): void {
    this.subDate.unsubscribe();
    this.subCity.unsubscribe();
  }
}
