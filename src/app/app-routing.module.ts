import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './log-in/log-in.component';
import { signupcomponent} from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminHomepageComponent } from './adminhomepage/adminhomepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HelppageComponent } from './helppage/helppage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { Payment } from './Model/payment';
import { BookaslotComponent } from './bookaslot/bookaslot.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SupportComponent } from './support/support.component';
import { TermsComponent } from './terms/terms.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  {path:'log-in', component: LoginComponent},
  {path:'signup', component: signupcomponent},
  {path:'homepage',component: HomepageComponent},
  {path:'adminhomepage', component: AdminHomepageComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path:'help', component: HelppageComponent},
  {path: 'cart', component: CartpageComponent},
  {path: 'payment', component: Payment},
  {path:'book-table', component:BookaslotComponent},
  {path:'about', component:AboutComponent},
  {path:'team', component:TeamComponent},
  {path:'support', component:SupportComponent},
  {path:'terms', component:TermsComponent},
  {path:'franchise', component:FranchiseComponent},
  {path:'foodlist', component:FoodlistComponent},
  {path:'userdetails',component:UserDetailsComponent},
  {path:'checkout/:totalAmount', component:CheckoutpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
