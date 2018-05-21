import { ResourceService } from './core/resource.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'app';
	person = 'Carlos Botero';

	constructor(private resourceService: ResourceService) {}
	logOut() {
		this.resourceService.logOut();
	}
}
