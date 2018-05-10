import { UserGuardService } from './users-guard.service';
import { ResourceService } from './resource.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ CommonModule, HttpClientModule ],
	exports: [],
	providers: [ ResourceService, UserGuardService ],
	declarations: []
})
export class CoreModule {}
