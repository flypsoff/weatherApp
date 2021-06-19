import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): unknown {
    return new Date(Number(`${value}000`)).toLocaleTimeString();
  }
}
