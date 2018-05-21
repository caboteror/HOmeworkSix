import { ResourceService } from './resource.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, CanLoad } from '@angular/router';

@Injectable()
export class UserGuardService implements CanLoad {
	constructor(private resourceService: ResourceService) {}

	canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
		const isAuthenticated = this.resourceService.validateLogin();
		return isAuthenticated;
	}
}
