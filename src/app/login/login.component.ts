import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) {

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

  signupWithEmail(email,password) {
    this.authService.signupWithEmail(email,password).then((data) => {
      this.router.navigate(['']);
    })
  }


}
