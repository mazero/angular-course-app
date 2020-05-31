import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../model/user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  // Here we inject some services like router & userService
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // We return an Observable based on the logged property of user
      return this.userService.isLoggedUser$().pipe(
        map(logged => {
          if (logged) { // If logged, it returns true continue to the asked route
            return true;
          } else { // Else, we redirect to the /welcome route using the parseUrl method from Router service
            return this.router.parseUrl('/welcome')
          }
        })
      )
  }

}
