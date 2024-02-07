import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../Model/user';
import { CafeManagementService } from '../service/cafe-management-service';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrl: './franchise.component.css'
})
export class FranchiseComponent {

  user:User=new User("",0,"","",0)
  isEditable!: boolean;
  constructor(public cafeManagementService:CafeManagementService,public route:Router,public activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getuserbyid())
  }
  getuserbyid(): void {
    const uidParam = this.activateRoute.snapshot.paramMap.get("uid");
  
    // Use nullish coalescing operator to provide a default value of "0" if uidParam is null
    const uid = parseFloat(uidParam ?? "0");
    console.log(uid);
  
    if (uid > 0) {
      this.isEditable = true;
      this.cafeManagementService.getuserbyid(uid).subscribe(data => {
        this.user = data;
        console.log(this.user);
      });
    }
  }
  
  SaveUsers(){
    if(this.isEditable){
      this.cafeManagementService.updateuser(this.user).subscribe(data=>{
        alert("Successfully updated "+this.user.username)
        sessionStorage.clear()
        localStorage.clear()
        this.route.navigateByUrl("/log-in")});
    }
    else{
      
    this.cafeManagementService.saveUser(this.user).subscribe(data =>{
      alert("Successfully Register ")
      this.route.navigateByUrl("/log-in")
    },
    error => alert("enter the user data / change the user name")
      );
      
  }

}
onSubmit() {
  this.route.navigateByUrl("/homepage");

}

}
