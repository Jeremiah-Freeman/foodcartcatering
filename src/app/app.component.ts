import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  private isLoggedIn: Boolean=true;
  // private isLoggedIn: Boolean;
  private userDisplayName: string;
  private userEmail: string;
  private userType: string;
  private partnerID: string;


  constructor(public authService: AuthService, private router: Router, private dataService: DataService) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.userDisplayName = '';
          this.userEmail = '';
          this.router.navigate(['login']);
        } else {
          if (auth.provider === 4) {
            this.userDisplayName = auth.auth.email;
            this.userEmail = auth.auth.email;
          } else if (auth.provider === 3) {
            this.userDisplayName = auth.google.displayName;
            this.userEmail = auth.google.email;
          }
          this.isLoggedIn = true;
          this.dataService.getUsers().subscribe(users => {
            for (let user of users) {
              if (user.email === this.userEmail) {
                this.userType = user.partnerType
                if (this.userType === 'f') {
                  this.dataService.getFoodCartByEmail(user.email).subscribe((cart) => {
                    this.partnerID = cart[0].$key;
                  });
                } else if (this.userType === 'c') {
                  this.dataService.getCustomerByEmail(user.email).subscribe((customer) => {
                    this.partnerID = customer[0].$key;
                  });
                } else if (this.userType === 'd') {
                  this.dataService.getDelivererByEmail(user.email).subscribe((deliverer) => {
                    this.partnerID = deliverer[0].$key;
                  });
                }
              }
            }
          });

          // this.router.navigate(['']);
        }
      }
    );
  }

  logOut() {
    this.authService.logout();
  }

}
