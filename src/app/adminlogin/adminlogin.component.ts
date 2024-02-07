import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from '../Model/admin';
import { CafeManagementService } from '../service/cafe-management-service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  admin: Admin = new Admin(0, "", "", "","")
 // admins: Admin = JSON.parse(sessionStorage.getItem("admin"))
  constructor(private cafeManagementService: CafeManagementService, private route: Router, public activateRoute: ActivatedRoute) { }
  ngOnInit(): void {  
    this.route.navigateByUrl("/adminhomepage");
  }
  Getlogin(): void {

    this.cafeManagementService.getadminlogin(this.admin).subscribe(data => {
      alert("Login Successfully"),
        console.log("login response" + data)

      sessionStorage.setItem("admin", JSON.stringify(data))

      this.route.navigateByUrl("/adminhomepage")

    },
      error => alert("Sorry Please Enter correct Username And Password"));

  }
  onSubmit() {
    this.Getlogin
    this.route.navigateByUrl("/adminhomepage");

  }
}