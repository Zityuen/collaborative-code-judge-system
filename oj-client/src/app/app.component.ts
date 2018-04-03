// src/app/app.component.ts

import { Component, Inject } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject('auth') private auth) {
    this.auth.handleAuthentication();
  }

}
