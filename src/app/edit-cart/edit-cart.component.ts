import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FoodCart } from '../food-cart.model';
import { DataService } from '../data.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css'],
  providers: [DataService]
})
export class EditCartComponent implements OnInit {
  foodCartId: string = null;
  foodCart;
  edit = new FoodCart();
  editValidationMessage = '';
  saved: boolean = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.foodCartId = urlParameters['id'];
    });

    this.dataService.getFoodCartById(this.foodCartId).subscribe((emittedData) => {
      this.foodCart = new FoodCart(
        emittedData.lat,
        emittedData.lon,
        emittedData.address,
        emittedData.instructions,
        emittedData.quadrantID,
        emittedData.name,
        emittedData.number,
        emittedData.email,
        emittedData.open,
        emittedData.close,
        emittedData.maximumOrderSize,
        emittedData.$key
      );
      this.edit.copyFields(this.foodCart);
      console.log(emittedData);
    });
      // promise.then((success) => {
      //   console.log(success);
      //   this.edit.copyFields(this.foodCart);
      // });
  }

  updateFoodCart(){
    this.editValidationMessage = this.edit.validationMessage();
    if(!this.editValidationMessage){
      const promise = this.dataService.updateFoodCart(this.edit);
      promise.then((success) => {
        // add id to this route to show specific delivery page
        // this.router.navigate(['cart-overview/', this.foodCartId]);
        this.saved = true;
        setTimeout(() => {
          this.saved = false;
        }, 2000)
      }).catch((failure) => {
        console.log('Cart save failed');
      });
    }
  }

}
