import { Component, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
})
export class DayCardComponent {
  @Input() day: any;

  public imageSrc = environment.apiImageLink;

  public getTemperature(maxT: number, minT: number): number {
    return this.weatherService.getAverageTemperature(maxT, minT);
  }

  public getDate(date: number): string {
    return this.weatherService.getRightFormatDate(date);
  }

  constructor(private weatherService: WeatherService) {}
}
