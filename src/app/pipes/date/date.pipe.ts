import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: number): string {
    return new Date(Number(`${value}000`)).toLocaleDateString();
  }
}
