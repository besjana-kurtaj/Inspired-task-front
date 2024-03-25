import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
 list:any;
 constructor(private serviceStudent:StudentService,private router:Router){

 }
 ngOnInit():void{
  this.serviceStudent.getAllStudent().subscribe(x=>{this.list=x;})
 }
 addStudent(){
  this.router.navigate(['add-student/'])  

}
editStudent(id: any) {
  this.router.navigate(['student/edit', id]);
}
onDeleteClick(id: any): void {
  this.serviceStudent.deleteStudent(id).subscribe(
    response => {
      // Handle success, e.g., refresh the product list
      alert("Student deleted")
      this.serviceStudent.getAllStudent().subscribe({
        next:(prod)=>{
      this.list=prod;  },
        error: (responese)=>
        {
          console.log(responese);
        }
      });
    },
    error => {
      // Handle error
      console.error('Error deleting product:', error);
    }
  );
}
}
