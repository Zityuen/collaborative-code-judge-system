import {Inject, Injectable} from '@angular/core';
import {Router, CanActivate} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(@Inject('auth') private auth,
              private router: Router) { }

  canActivate(): boolean{
    if(this.auth.isAuthenticated()){
      return true;
    } else {
      //redirect to home page if not logged in
      this.router.navigate(['/problems']);
      return false;
    }
  }

  isAdmin(): boolean{
    if(this.auth.isAuthenticated() && this.auth.getRoles().includes('Admin')){

      return true;
    } else {
      return false;
    }
  }


}
