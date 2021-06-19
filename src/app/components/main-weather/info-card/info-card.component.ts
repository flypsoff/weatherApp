import { Component, Input } from '@angular/core';
import { WeatherParamsInfo } from 'src/app/interfaces/weatherInterface';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() weatherParams!: WeatherParamsInfo;

  constructor() {}
}
