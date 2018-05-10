import { UserGuardService } from './../../core/users-guard.service';
import { User } from './../../users/user.iterface';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(private userGuarServices: UserGuardService) {}

	setUser(user: string) {
		this.userGuarServices.setUser(user);
	}

	setPassword(password: string) {
		this.userGuarServices.setPassword(password);
	}

	ngOnInit() {}
}
