import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public signUpForm!: FormGroup;
  type: string = 'password';
  submitted:boolean=false;
 
  constructor(private fb : FormBuilder, private auth: UserService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['', Validators.required, Validators.min(2), Validators.max(50)],
      lastName:['', Validators.required, Validators.min(2), Validators.max(50)],
      userName:['', Validators.required, Validators.min(2), Validators.max(50)],     
      password:['', Validators.required]
    })
  }



  onSubmit() {
 

    if (this.signUpForm.invalid) {
      let signUpObj = {
        ...this.signUpForm.value,
     
      }
      
      this.auth.signUp(signUpObj)
      .subscribe({
        next:(res=>{
          console.log(res.message);
          this.signUpForm.reset();
      
          alert(res.message)
       this.router.navigate(['user-list/']);
        }),
        error:(err=>{
          alert(err?.error.message)
        })
      })
     
    }else{
     
      this.submitted = true;
    }
  }
}
