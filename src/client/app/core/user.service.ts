import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user';


@Injectable()
export class UserService {
	private url: string = 'app/users';
	private headers = new Headers({'Content-Type':'application/json'});

	constructor(private http: Http) {
		//console.log(this.url);
	}

	getUsers(): Promise<User[]> {
		return this.http.get(this.url)
					.toPromise()
					.then(response => response.json().data as User[])
					.catch(this.handleError);
	}

	getUser(id: number): Promise<User> {
		return this.getUsers()
				.then(Users => Users.find(User => User.id ===id));
	}

	addUser(user: User): Promise<User> {
		return this.http
		.post(this.url, JSON.stringify(user), { headers: this.headers })
		.toPromise()
		.then(response => response.json().data as User)
		.catch(this.handleError);		
	}

	updateUser(user: User): Promise<User> {
		let url = `${this.url}/${user.id}`;
		return this.http
				.put( url, JSON.stringify(user), {headers: this.headers})
				.toPromise()
				.then(() => user)
				.catch(this.handleError);
	}

	deleteUser(id: number):Promise<void> {
		let url = `${this.url}/${id}`;
		return this.http
				.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}