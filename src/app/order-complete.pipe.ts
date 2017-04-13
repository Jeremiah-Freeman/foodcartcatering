import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.model';

@Pipe({
  name: 'orderComplete',
  pure: false
})
export class OrderCompletePipe implements PipeTransform {

  transform(input, sortOn) {
    if (input) {
      console.log(sortOn);
      const output: any[] = [];
      if (sortOn === 'incomplete'){

        for (var i = 0; i < input.length; i++) {
          if (!input[i].order.productionCompletionStatus) {
            output.push(input[i])
          }
        }
      } else if (sortOn === 'complete') {
        for (var i = 0; i < input.length; i++) {
          if (input[i].order.productionCompletionStatus) {
            output.push(input[i])
          }
        }
      }
      return output;
    }
  }

}
