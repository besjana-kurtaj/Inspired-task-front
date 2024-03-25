import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    StudentListComponent,
    StudentEditComponent,
    UserEditComponent,
    UserListComponent,
    StudentAddComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
