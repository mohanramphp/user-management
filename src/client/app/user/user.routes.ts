import { Route } from '@angular/router';
import { UserComponent } from './index';
import { UserDetailComponent } from './index';
import { AuthGuardService } from '../core/index';

export const UserRoutes: Route[] = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-detail',
    component: UserDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-detail/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuardService]
  }

];
