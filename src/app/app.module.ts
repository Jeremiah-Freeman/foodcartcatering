import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterApiKeys } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';


export const firebaseConfig = {
  apiKey: masterApiKeys.apiKey,
  authDomain: masterApiKeys.authDomain,
  databaseURL: masterApiKeys.databaseURL,
  storageBucket: masterApiKeys.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
