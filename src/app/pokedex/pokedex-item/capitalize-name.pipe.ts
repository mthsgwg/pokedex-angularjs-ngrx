import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizeNamePipe implements PipeTransform {
  capitalizeName(value: string): string {
    const arr = value.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  }

  transform(value: any, ...args: any[]) {
    return this.capitalizeName(value);
  }
}
