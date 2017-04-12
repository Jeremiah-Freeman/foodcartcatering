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
  private user_displayName: String;
  private user_email: String;
  private user_type: String;
  constructor(public authService: AuthService, private router: Router, private dataService: DataService) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          if (auth.provider === 4) {
            this.user_displayName = auth.auth.email;
            this.user_email = auth.auth.email;
          } else if (auth.provider === 3) {
            this.user_displayName = auth.google.displayName;
            this.user_email = auth.google.email;
          }
          this.isLoggedIn = true;
          // this.dataService.getUsers().subscribe(users => {
          //   for (let user of users) {
          //     if (user.email === this.user_email) {
          //       if (user.partnerType === 'c') {
          //         router.navigate(['customer-overview'])
          //       } else if (user.partnerType === 'f') {
          //         router.navigate(['cart-overview'])
          //       } else if (user.partnerType === 'd') {
          //         router.navigate(['delivery-overview'])
          //       }
          //     }
          //   }
          // });

          console.log(auth);
          console.log("Logged in");
          // this.router.navigate(['']);
        }
      }
    );
  }

  logOut() {
    this.authService.logout();
  }

}
