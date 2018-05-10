import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Route, CanLoad } from '@angular/router';

@Injectable()
export class ResourceService {
	userOk = 'cbotero';
	passwordOk = 'caboteror';
	loginOk = true;
	user = '';
	password = '';
	constructor(private http: HttpClient) {}

	getResource<T>(url: string, property: string[]): Observable<T[]> {
		return this.http.get<T[]>(url);
	}
}
