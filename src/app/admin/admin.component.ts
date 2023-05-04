import { Component } from '@angular/core';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(
    private router: Router,)
    {}
modal:boolean = false
faBurger = faBurger;
handleLogout() {
  localStorage.getItem('accessToken')
  this.router.navigate(['login'])
}
}
