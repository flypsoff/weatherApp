import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageTemperature',
})
export class AverageTemperaturePipe implements PipeTransform {
  transform(maxTemperature: number, minTemperature: number): number {
    return Math.round((maxTemperature + minTemperature) / 2);
  }
}
