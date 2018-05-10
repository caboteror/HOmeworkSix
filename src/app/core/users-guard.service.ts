import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, CanLoad } from '@angular/router';

@Injectable()
export class UserGuardService implements CanLoad {
	userOk = 'cbotero';
	passwordOk = 'caboteror';
	user = '';
	password = '';
	validateLogin() {
		return this.user === this.userOk && this.password === this.passwordOk;
	}

	canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
		return this.validateLogin();
	}

	setUser(user: string) {
		this.user = user;
	}

	setPassword(password: string) {
		this.password = password;
	}
}
