import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // Show the splash screen
      this.router.navigate(['splash-screen']);

      // Simulate app loading for 3 seconds
      setTimeout(() => {
        // Hide the splash screen and allow access to the requested route
        this.router.navigate(['login']);
        resolve(true);
      }, 3000);
    });
  }
}
