import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Credential } from './credential';

@Injectable()
export class AuthService {
	
	private url: string = 'app/credentials';
	private headers = new Headers({'Content-Type':'application/json'});
	private credential: Credential;
	constructor(private http: Http) {}

	authenticate(credential: Credential): Promise<Credential> {
		return this.http
					.get(this.url)
					.toPromise()
					.then(response => {
						let credentials: Credential[] = response.json().data;
						return credentials.find((c) => (c.name == credential.name && c.password == credential.password));	
					});
	}

	setCredential(credential: Credential): void {
		this.credential = credential;
	}

	getCredential(): Credential {
		return this.credential;
	}

}