import { Pipe, PipeTransform } from '@angular/core';
import { AssetGroup } from '../model/asset-group';
import { eType } from '../model/e-type.enum';

@Pipe({
  name: 'groupType'
})
export class GroupTypePipe implements PipeTransform {

  transform(items: AssetGroup[], filter: eType): any {
   if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.groupType === filter);
    }
}
