import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';


@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [UserComponent, UserDetailComponent]
})
export class UserModule { }
