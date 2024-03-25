import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCase',
})
export class ToogleCasePipe implements PipeTransform {
  transform(value: string, toogle: boolean): string {
    return toogle ? value.toUpperCase() : value.toLowerCase();
  }
}
