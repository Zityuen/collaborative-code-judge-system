import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "COJ";
  username = "";
  searchBox: FormControl = new FormControl();
  subscription: Subscription;
  constructor(@Inject('auth') private auth,
              @Inject('input') private input,
              private router: Router) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()){
      this.username = this.auth.getProfile().nickname;
    }

    this.subscription = this.searchBox.valueChanges.debounceTime(300).subscribe(term => {
      this.input.changeInput(term);
    });
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }


  searchProblem(): void{
    this.router.navigate(['/problems']);
  }

  login(){
    localStorage.setItem('curLocation', window.location.href);
    this.auth.login();
    this.username = this.auth.getProfile().nickname;
  }

  logout(){
    this.auth.logout();
    localStorage.removeItem('curLocation');
  }
}
