import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  onLoginSubmit(credentials){
  	return this.http.post('/api/authenticate', JSON.stringify(credentials)).map(response => {
  		let result = response.json();
  		if(result && result.token){
  			localStorage.setItem('token', result.token);
  			return true;
  		}
  		return false;
  	});
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token)
      return true;
    else
      return false;
  }

  currentUser(){
    let token = localStorage.getItem('token');

    let jwtHelper = new JwtHelper();
    let decodedToken = jwtHelper.decodeToken(token);
    return decodedToken;
  }
}

