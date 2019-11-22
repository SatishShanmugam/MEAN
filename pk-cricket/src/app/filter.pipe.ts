import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(details: any, searchstring: string): any {
    if ( !details || !searchstring) {
        return details;
    }
    return details.filter(detail => detail.name.toLowerCase().indexOf(searchstring.toLocaleLowerCase()) !== -1);
  }

}
