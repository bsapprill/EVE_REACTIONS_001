import { Injectable } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIsAuthedGuard implements CanActivate {
  
  constructor(
    private firebase: AngularFireAuth,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      return true;
  }
}
