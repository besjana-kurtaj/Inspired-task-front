import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 public loginForm!: FormGroup;
  type: string = 'password';
  submitted:boolean =false;
  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private router: Router,
   
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {  
    if(this.loginForm.invalid){    
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          this.router.navigate(['user-list'])     
        },
        error: (err) => {
          alert(err.error.message)
        },
      }); 
    }else{
      this.submitted=true;
    }  
  }
}
