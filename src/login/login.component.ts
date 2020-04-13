import { Component } from '@angular/core';
import { AuthService } from '../services/authService.service';
import { Router } from "@angular/router";

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
})

export class LoginComponent {
	constructor(private loginAuth: AuthService, private router: Router){
	}

	alreadyLoggedIn: boolean;
	invalidLogin: boolean;

	onSubmit(credentials){
		if(this.loginAuth.isLoggedIn()){
			this.alreadyLoggedIn = true;
			this.router.navigate(['/employees']);
			//return;
		}
		else{
			this.loginAuth.onLoginSubmit(credentials)
		  .subscribe(result => {
		  	if(result)
          this.router.navigate(['/employees']);
        else
          this.invalidLogin = true;
		  });
		}
	}
}
