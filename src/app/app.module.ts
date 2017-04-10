import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterApiKeys } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { DataService } from './data.service';
import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey: masterApiKeys.apiKey,
  authDomain: masterApiKeys.authDomain,
  databaseURL: masterApiKeys.databaseURL,
  storageBucket: masterApiKeys.storageBucket
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
