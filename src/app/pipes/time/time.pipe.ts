import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    return new Date(Number(`${value}000`)).toLocaleTimeString();
  }
}
