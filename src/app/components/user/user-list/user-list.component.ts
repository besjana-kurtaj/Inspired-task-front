import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  list:any;
  constructor( private userService: UserService,private router:Router) { }
  ngOnInit():void{
    this.userService.getAllUser().subscribe(
      x=>{
        this.list=x;
      }
    )
  }
  addUser(){
    this.router.navigate(['register/'])  

  }
  editStudent(id: any) {
    this.router.navigate(['user/edit', id]);
  }
  onDeleteClick(id: any): void {
    this.userService.deleteUser(id).subscribe(
      response => {
        
        alert("user deleted")
        this.userService.getAllUser().subscribe({
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
