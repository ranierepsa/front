import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  { path: 'home', component: UserTableComponent },
  { path: 'users', component: UserDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

