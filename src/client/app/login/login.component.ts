import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, Credential } from '../core/index';

@Component({
	moduleId: module.id,
	selector: 'my-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class LoginComponent {
	
	private credential: Credential = new Credential();
	private active: boolean = true;
	
	constructor(private router: Router, private authService: AuthService) {}

	formSubmission(): void {
		this.authService.authenticate(this.credential).then((credential) => {
			if(credential) {
				this.authService.setCredential(credential);
				this.navigate();
			} else {
				alert('Username and Password are invalid');
			}
		})
	}

	private navigate(): void {
		let link = ['/user'];
				this.router.navigate(link);
	}
	
}