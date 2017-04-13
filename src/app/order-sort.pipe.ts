import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.model';

@Pipe({
  name: 'orderSort',
  pure: false
})
export class OrderSortPipe implements PipeTransform {

  transform(input: Order[], sortOn = 'requestedDeliveryTime') {
    if (input) {
      const output: Order[] = [];

      if (sortOn === 'requestedDeliveryTime') {
        for (var i = 0; i < input.length; i++) {
          for (var j = 0; j < output.length; j++) {
            if (j >= output.length) {
              output.push(input[i]);
            } else if (input[i][sortOn] < output[j][sortOn]) {
              output.splice(j, 0, input[i]);
            }
          }
        }
      }

      return output;
    }
  }

}
