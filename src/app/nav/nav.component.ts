import { Component } from '@angular/core';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent { 
  constructor(
    private router: Router,
  ){}
  faBurger = faBurger;

  handleLogout() {
    this.router.navigate(['login'])
    localStorage.clear()
  }

}
