import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) { }


  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  loginWithEmail(email,password) {
    return this.af.auth.login({
      email: email,
      password: password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  signupWithEmail(email,password) {
    return this.af.auth.createUser({
      email: email,
      password: password
    })
  }

  logout() {
    return this.af.auth.logout();
  }

}
