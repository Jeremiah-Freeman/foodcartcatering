import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  currentUser;

  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.authService.af.auth.subscribe((auth) => {
      if (auth) {

      console.log(auth);
      this.dataService.getUserByEmail(auth.auth.email).subscribe((user) => {
        console.log(user);
        switch(user[0].partnerType){
          case "c":
            this.dataService.getCustomerByEmail(auth.auth.email).subscribe((customer) => {
              this.router.navigate(['customer-overview/', customer[0].$key])
            });
            break;
          case "d":
            this.dataService.getDelivererByEmail(auth.auth.email).subscribe((deliverer) => {
              this.router.navigate(['delivery-overview/', deliverer[0].$key])
            });
            break;
          case "f":
            this.dataService.getFoodCartByEmail(auth.auth.email).subscribe((cart) => {
              this.router.navigate(['cart-overview/', cart[0].$key])
            });
            break;
          default:
            console.log('no account type found');
        }
      });
    } else {
      this.router.navigate(['login']);
    }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
