import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './userList/userList.component';


const routes: Routes = [{
  path: 'userlist', component: UserListComponent,
   data: {
    titleName: '用户'
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
