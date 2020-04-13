import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './authService.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthService) { }

  canActivate(){
  	if(this.authService.currentUser().admin)
  		return true;
  	else{
  		this.router.navigate(['/employees']);
  		return false;
  	}
  }
}
