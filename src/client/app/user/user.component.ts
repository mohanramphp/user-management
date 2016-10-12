import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User, AuthService, Credential } from '../core/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'my-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent implements OnInit {
	  
    private users: User[];
  	private credential: Credential = new Credential();
  	
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private router: Router
     ) {}
    
    deleteUser(user: User):void {
      if(confirm('Are you sure to delete this user?')) {
        this.userService.deleteUser(user.id).then(()=>{
          this.users = this.users.filter(u => u!==user);
        });  
      } 
    }
  	
    ngOnInit() {
    	this.userService.getUsers().then(users => this.users = users);
      this.credential = this.authService.getCredential();
  	}

    logout() {
      if(confirm('Are you sure to Logout?')) {
        this.authService.setCredential(null);
        this.router.navigate(['/login']);  
      }
    }
}
