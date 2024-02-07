import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CafeManagementService } from '../service/cafe-management-service';
import { MatDialog } from '@angular/material/dialog';
import { CreditcardDialogComponent } from '../creditcard-dialog/creditcard-dialog.component';
import { UpiDialogComponent } from '../upi-dialog/upi-dialog.component';
import { User } from '../Model/user';


@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  
  styleUrl: './checkoutpage.component.css'
})
export class CheckoutpageComponent implements OnInit {

  totalAmount:number;
  user: User;
  showProfile: boolean = false;
  isDropdownOpen: boolean;

  

  constructor(private cafeManagementService: CafeManagementService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.totalAmount = params['totalAmount'];
    });

  }


  openCreditCardDialog(): void {
    const dialogRef = this.dialog.open(CreditcardDialogComponent, {
      width: '400px',
      data: { totalAmount: this.totalAmount }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The credit card dialog was closed');
    });
  }


  openUPIDialog(): void {
    const dialogRef = this.dialog.open(UpiDialogComponent, {
      width: '400px',
      data: { totalAmount: this.totalAmount }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The UPI dialog was closed');
    });
  }


  
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

  proceed(){
    this.router.navigateByUrl('/cart');
  }
  
  

}
