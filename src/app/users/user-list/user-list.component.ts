import { User } from './../user.iterface';
import { ResourceService } from './../../core/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: [ './user-list.component.scss' ]
})
export class UserListComponent implements OnInit {
	url = 'https://jsonplaceholder.typicode.com/users';

	users$;

	constructor(private resourceService: ResourceService) {
		this.users$ = resourceService.getResource<User[]>(this.url, [ 'name', 'id' ]);
	}

	ngOnInit() {}
}
