import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginRoutes } from './login/index';
import { UserRoutes } from './user/index';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	...UserRoutes,
	 ...LoginRoutes,	 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}