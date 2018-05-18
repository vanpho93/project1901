import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class MustBeUserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    if (!token) this.router.navigate(['/signin']);
    return !!token;
  }
}
