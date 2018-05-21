import { ResourceService } from './../../core/resource.service';
import { User } from './../../users/user.iterface';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(private resourceService: ResourceService) {}

	setUser(user: string) {
		this.resourceService.setUser(user);
	}

	setPassword(password: string) {
		this.resourceService.setPassword(password);
	}

	validateUserAndPassword() {
		this.resourceService.validateUserAndPassword();
	}

	ngOnInit() {}
}
