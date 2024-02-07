import { Component, OnInit } from '@angular/core';
import { CafeManagementService } from '../service/cafe-management-service';
import { User } from '../Model/user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  userId: number;
  userDetails: any;

  constructor(private cafeManagementService: CafeManagementService, private route:ActivatedRoute){}

  ngOnInit(): void {
   this.route.params.subscribe(params =>{
    this.userId = +params['id'];
    this.getUserDetails();
   });
  }

  getUserDetails(){
    this.cafeManagementService.getuserbyid(this.userId).subscribe(
      (data)=>{
        this.userDetails=data;
      },
      (error) =>{
        console.error('Error fecthing user Details', error);
      }
      );
    
  }


}
