import { CoreModule } from './../core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
	imports: [ CommonModule, UserRoutingModule, CoreModule ],
	exports: [ UserListComponent ],
	declarations: [ UserListComponent, UserComponent ]
})
export class UsersModule {}
