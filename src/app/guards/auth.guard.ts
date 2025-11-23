import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.isAdmin() ? 'admin' : 'client';
      const requiredRole = route.data['role'];

      if (requiredRole && userRole !== requiredRole) {
        this.router.navigate(['/cars']);
        return false;
      }
      
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}