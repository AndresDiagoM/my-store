import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

import { TokenService } from '../services/auth/token.service';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // --------Constructor--------
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  // --------Métodos--------
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return this.authService.user$.pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }

}
