import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Credential } from './credential';


@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(
  	private authService: AuthService,
  	private router: Router
  ) {}
  
  canActivate() {
    let credential: Credential = this.authService.getCredential();
    console.log('AuthGuard#canActivate called');
    if(credential) {
    	return this.authService.authenticate(credential).then(c => {
    		if(!c) {
		    	this.router.navigate(['/login'])
		    	return false;		
    		} else {
    			return true;
    		}
    	});
    } else {
    	this.router.navigate(['/login'])
    	return Promise.resolve(false);
    }
  }
}
