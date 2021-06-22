import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-app-weather',
  templateUrl: './app-weather.component.html',
  styleUrls: ['./app-weather.component.scss'],
})
export class AppWeatherComponent implements OnInit {
  private city: string = '';

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params) => {
      this.city = params['city'];
    });
  }

  ngOnInit(): void {
    this.weatherService.getCoordinates(this.city).subscribe();
  }
}
