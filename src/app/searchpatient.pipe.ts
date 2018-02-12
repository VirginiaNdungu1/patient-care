import { Pipe, PipeTransform } from '@angular/core';
// Name the pipe
@Pipe({
  name: 'SearchFilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();

      return value.filter(function(el: any) {
        // el represents each patient in the list of patients(value)
        console.log(el.first_name)
        // search by first_name or last_name
        // indexOf returns the index of the first occurence of the searchValue -- in this case (input)
        return el.first_name.toLowerCase().indexOf(input) > -1 || el.last_name.toLowerCase().indexOf(input) > -1;
      })
    }
    console.log(value)
    return value;
  }
}
