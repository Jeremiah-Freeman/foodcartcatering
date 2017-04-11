import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model'
import { Customer } from '../customer.model'
import { Deliverer } from '../deliverer.model'
import { FoodCart } from '../food-cart.model'
import { DataService } from '../data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})


export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router, private dataService: DataService) {

  }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

  loginWithEmail(email,password) {
    this.authService.loginWithEmail(email,password).then((data) => {
      console.log('success');
      this.router.navigate(['']);
    })
  }

  signupWithEmail(email,password,accountType) {
    this.authService.signupWithEmail(email,password).then((data) => {
      var newUser = new User(email, accountType);
      this.dataService.addUser(newUser);

      switch(newUser.partnerType){
        case "c":
          let newCustomer = new Customer;
          newCustomer.email = newUser.email;
          this.dataService.addCustomer(newCustomer);
          this.router.navigate(['customer-overview']);
          break;
        case "d":
          let newDeliverer = new Deliverer;
          newDeliverer.email = newUser.email;
          const promise = this.dataService.addDeliverer(newDeliverer);
          promise.then((success) => {
            console.log('hello');
            this.dataService.getDelivererByEmail(newUser.email).subscribe((deliverer) => {
              console.log(deliverer);
              this.router.navigate(['deliverer-edit/', deliverer[0].$key])
            });
          });
          this.router.navigate(['delivery-overview']);
          break;
        case "f":
        let newFoodCart = new FoodCart;
        newFoodCart.email = newUser.email;
        this.dataService.addFoodCart(newFoodCart);
        this.router.navigate(['cart-overview']);
          break;
        default:
          console.log('no account type found');
      }

    })
  }


}
