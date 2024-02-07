import { Component, OnInit } from '@angular/core';
import { CafeManagementService } from '../service/cafe-management-service';
import { User } from '../Model/user';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit {

  user: User;
  
  editing: boolean = false;

  getuserbyid:number;

  loggedInUserDetails: User;

  constructor(private cafeManagementService: CafeManagementService){ }

  ngOnInit() {
  
  }

  editProfile() {
    this.editing = true;
  }

  updateProfile() {
    this.cafeManagementService.updateuser(this.user).subscribe((updatedUser: User) => {
      this.user = updatedUser;
      this.editing = false;
    });
  }


}