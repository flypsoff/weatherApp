import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const date = new Date(Number(`${value}000`)).toLocaleTimeString();
    return date.split(' ')[0]
  }
}
