import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
	
	createDb() {
		let credentials = [
			{
				name: 'admin',
				password: 'admin'
			},
			{
				name: 'user',
				password: 'user'
			}
	    ];

		 let users = [
	      {
	      	id: 11, 
	      	name: 'Mohan Ram',
	      	contact: '9456232123',
	      	address: 'Theni'
	      },
	      {
	      	id: 12, 
	      	name: 'Satish',
	      	contact: '8834187432',
	      	address: 'Chennai'
	      }
	    ];
	    return {
	    	users,
	    	credentials
	    };
	}
}


