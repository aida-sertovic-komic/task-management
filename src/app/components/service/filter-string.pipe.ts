import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 40) {
      return value.substring(0, 40) + '...';
    } else {
      return value;
    }
  }
}