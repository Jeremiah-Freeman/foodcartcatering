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
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.foodCartId = urlParameters['id'];
      this.dataService.getDelivererById(this.foodCartId).subscribe((foodCart) => {
        this.foodCart = foodCart;
        console.log(this.foodCart);
      });
    });
  }

}
