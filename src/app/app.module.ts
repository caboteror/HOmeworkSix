import { UserGuardService } from './core/users-guard.service';
import { ResourceService } from './core/resource.service';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './authentication/login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authentication.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AuthenticationModule,
		CoreModule,
		RouterModule.forRoot([
			{ path: '', component: LoginComponent },
			{
				path: 'users',
				loadChildren: './users/users.module#UsersModule',
				canLoad: [ UserGuardService ]
			}
		])
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
