import { User } from './../../users/user.iterface';
import { ResourceService } from './../../core/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	user = '';
	password = '';

	constructor(private resourceService: ResourceService) {}

	setUser(user: string) {
		this.user = user;
		this.resourceService.setUser(user);
	}

	setPassword(password: string) {
		this.password = password;
		this.resourceService.setPassword(password);
	}

	ngOnInit() {}
}
