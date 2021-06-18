import { Component, Input } from '@angular/core';
import { WeatherParamsInfo } from 'src/app/interfaces/weatherInterface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() weatherParams!: WeatherParamsInfo;

  public getTemp(temp: number): number {
    return this.weatherService.getRightFormatTemperature(temp);
  }

  constructor(private weatherService: WeatherService) {}
}
