import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User, UserService } from '../core/index';
@Component({
	moduleId: module.id,
	selector: 'my-user-detail',
	templateUrl: 'user-detail.component.html',
	styleUrls: ['user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
	user: User = new User();
	
	active: boolean = true;
	
	constructor(
		private activatedRoute: ActivatedRoute, 
		private router: Router,
		private userService: UserService
	) {}
	
	navigateToUsers(): void {
		this.router.navigate(['/user']);
	}

	onSubmit(): void {
		if(this.user.id) {
			this.userService.updateUser(this.user).then(user => {
				alert("User data updated successfully");
				this.navigateToUsers();
			})
		} else {
			this.userService.addUser(this.user).then(user => {
				alert("User data added successfully");
				this.navigateToUsers();
			})
		}
	}
	ngOnInit() {
		this.activatedRoute.params.forEach((params: Params) => {
			let id = (params['id']) ? +params['id']: null;
			if(id) {
				this.userService.getUser(id).then(user => {
					this.user = user;
				});
			}
		});
	}
}