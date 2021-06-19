import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometers',
})
export class KilometersPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value * 1.6);
  }
}
