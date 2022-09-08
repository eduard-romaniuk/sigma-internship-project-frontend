import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../enums/role';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(): boolean {
    const isAuthed = this.authService.isUserLoggedIn();
    console.log(isAuthed)
    if (!isAuthed) {
      this.router.navigate(['']);
    }
    return isAuthed;
  }

}
