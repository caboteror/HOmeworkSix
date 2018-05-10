import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				children: [ { path: '', component: UserListComponent } ]
			},
			{ path: 'user/:name', component: UserComponent }
		])
	],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
