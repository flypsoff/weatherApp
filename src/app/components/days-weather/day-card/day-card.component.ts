import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
})
export class DayCardComponent {
  @Input() day: any;

  public imageSrc = environment.apiImageLink;

  constructor() {}
}
