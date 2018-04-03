import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "COJ";
  username = "";
  constructor(@Inject('auth') private auth) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()){
      this.username = this.auth.getProfile().nickname;
    }
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
