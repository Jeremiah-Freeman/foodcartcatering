import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model'
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
      this.router.navigate(['']);
    })
  }


}
