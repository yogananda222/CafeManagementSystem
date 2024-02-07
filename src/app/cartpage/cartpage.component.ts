import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
import { Router , ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { CafeManagementService } from '../service/cafe-management-service';
import { User } from '../Model/user';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})

export class CartpageComponent {

  user: User;
  showProfile: boolean = false;
  isDropdownOpen: boolean;

 
 constructor(private cafeManagementService: CafeManagementService , private router: Router){}

  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  

  logout() {
    if (sessionStorage.getItem("user")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Hope will see you again ! Have a nice day :)")
      this.router.navigateByUrl("/log-in")
    }
    else {
      alert("No user loged in")
    }
   }
   checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl("/log-in");
    }
  }

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }
  
  

 }
  

  



