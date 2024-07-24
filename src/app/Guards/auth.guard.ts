/*import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { map, take } from 'rxjs/operators';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if(localStorage.getItem('user_id'))
      return true;
    else return false
  }
}
