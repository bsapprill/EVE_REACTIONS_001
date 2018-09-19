import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserIsAdminGuard implements CanActivate {
  
  constructor(
    private firebase: AngularFireAuth,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
