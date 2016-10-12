import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
	imports:[
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	providers:[
		UserService,
		AuthService,
		AuthGuardService
	]

})
export class CoreModule {}