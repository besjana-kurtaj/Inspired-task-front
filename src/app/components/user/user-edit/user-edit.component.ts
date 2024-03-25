import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  userId: any;
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService,private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.userService.getUserById(this.userId).subscribe(users => {
      
        this.user = users;
        this.user.dateOfBirth = formatDate(this.user.dateOfBirth, 'yyyy-MM-dd', 'en-US');
      });
    });
  }
  updateUser() {
    this.userService.updateUser(this.userId, this.user).subscribe(
      updatedProduct => {       
        this.router.navigate(['user-list']);
      },
      error => {
        console.error('Error:', error);
       
      }
    );
  }
}
