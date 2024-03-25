import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  studentId!: number;
  student: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService,private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = +params['id'];
      this.studentService.getStudentById(this.studentId).subscribe(stu => {
        this.student = stu;
      });
    });
  }
  updateStudent() {
    this.studentService.updateStudent(this.studentId, this.student).subscribe(
      updateStudent => {       
        this.router.navigate(['student-list']);
      },
      error => {
        console.error('Error updating product:', error);
       
      }
    );
  }
}
