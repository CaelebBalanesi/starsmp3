import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'styledDate'
})
export class StyledDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let mins = date.getMinutes();
    return year + " - " + month + " - " + day + " - " + hour + " - " + mins;
  }

}
