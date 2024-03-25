import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  add: Student={
   firstName:'',
   lastName:'',
   dateOfBirth:'',
   gender:false

  }

  
  constructor(private studentService:StudentService, private router:Router){}
  addStudent(){
    this.studentService.addStudent(this.add).subscribe({
      next: (prod) => {
        this.router.navigate(['student-list']);
      },
      error: (error) => {
       console.log(error.message);
        
      }
    });
  }

}
