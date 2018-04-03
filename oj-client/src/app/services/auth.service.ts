// src/app/auth/auth.service.ts

import {Inject, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  domain:string = 'coj503.auth0.com';
  auth0 = new auth0.WebAuth({
    clientID: 'K4dCDsl-DHoB3dQoJ9ndbXPDTpdOMT7D',
    domain: this.domain,
    responseType: 'token id_token',
    audience: 'https://coj503.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid profile email'
  });

  constructor(public router: Router,
              private http: Http) {}

  public login(): void {
    this.auth0.authorize();
  }
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.auth0.client.userInfo(authResult.accessToken, (error: string, profile: Object) => {
          this.setSession(authResult);
          localStorage.setItem('profile', JSON.stringify(profile));
          window.location.href = localStorage.getItem('curLocation');
          // alert("log in successfully!!");
          // console.log(localStorage.getItem('curLocation'));
        })
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    // this.auth0.client.userInfo(authResult.accessToken, function(err, profile){
    //   if(profile){
    //     var userProfile = JSON.stringify(profile);
    //     localStorage.setItem('profile', userProfile);
    //   }
    // })
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(){
    return JSON.parse(localStorage.getItem('profile'));
  }


  public resetPassword(): void {
    let profile = this.getProfile();
    let url: string = `https://${this.domain}/dbconnections/change_password`;
    let headers = new Headers({'content-type': 'application/json'});
    let body = {
      client_id: 'K4dCDsl-DHoB3dQoJ9ndbXPDTpdOMT7D',
      email: profile.email,
      connection: 'Username-Password-Authentication'
    }
    this.http.post(url, body, headers)
      .toPromise()
      .then((res: Response) => {
        console.log(res.json());
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error occurred', error);
    return Promise.reject(error.message || error);
  }


}
