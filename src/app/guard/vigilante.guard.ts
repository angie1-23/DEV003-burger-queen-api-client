import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  // state: boolean = false;
  constructor(private cookieService: CookieService, private router: Router) { }

  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['login']);
      //  this.toastr.error('No cuentas con acceso a está ruta','Acceso Denegado');
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = this.cookieService.check('accessToken');
    this.redirect(cookie)
    return cookie;  
  }
  
}

