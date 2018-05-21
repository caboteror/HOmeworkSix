import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Route, CanLoad } from '@angular/router';

@Injectable()
export class ResourceService {
	userOk = 'cbotero';
	passwordOk = 'caboteror';
	loginOk = false;
	user = '';
	password = '';
	constructor(private http: HttpClient) {}

	getResource<T>(url: string, property: string[]): Observable<T[]> {
		return this.http.get<T[]>(url);
	}
	validateLogin() {
		console.log(this.loginOk);
		return this.loginOk;
	}

	validateUserAndPassword() {
		this.loginOk = this.user === this.userOk && this.password === this.passwordOk;
	}
	setUser(user: string) {
		this.user = user;
	}

	setPassword(password: string) {
		this.password = password;
	}

	logOut() {
		this.loginOk = false;
	}
}
