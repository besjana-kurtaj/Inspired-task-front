import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';

const routes: Routes = [

  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }, 
  {
    path: 'student/edit/:id',
    component: StudentEditComponent
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent
  },
  {
    path: 'add-student',
    component: StudentAddComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
