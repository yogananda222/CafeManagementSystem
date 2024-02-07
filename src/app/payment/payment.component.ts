import { Component } from '@angular/core';
import { User } from '../Model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  isDropdownOpen: boolean;
  user: User;
  showProfile: boolean = false;

constructor(private router: Router){}
  
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
