import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.model';


@Pipe({
  name: 'orderDelivered',
  pure: false
})
export class OrderDeliveredPipe implements PipeTransform {

  transform(input, sortOn) {
    if (input) {
      console.log(sortOn);
      const output: any[] = [];
      if (sortOn === 'accepted'){

        for (var i = 0; i < input.length; i++) {
          if (!input[i].order.productionCompletionStatus) {
            output.push(input[i])
          }
        }
      } else if (sortOn === 'delivered') {
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
