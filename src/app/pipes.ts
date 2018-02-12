import { Pipe, PipeTransform } from '@angular/core';
// Name the pipe
@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, input: string): any {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function(patient) {
        return patient.first_name.indexOf(input) > -1;
      })
    }
    return value;
  }

}
// return !input || (el ? ('' + el).toLowerCase().indexOf(input) !== -1 : false);
