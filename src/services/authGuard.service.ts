import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './authService.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(){
  	if(this.authService.isLoggedIn())
  	 return true;
  	else
  	 this.router.navigate(['/']);
  	 return false;
  }
}
