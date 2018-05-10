import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	user$;
	constructor(private route: ActivatedRoute) {
		this.user$ = route.paramMap.pipe(pluck('params', 'name'));
	}

	ngOnInit() {}
}
