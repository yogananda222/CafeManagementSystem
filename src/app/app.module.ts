
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './log-in/log-in.component';
import { signupcomponent } from './signup/signup.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { PaymentComponent } from './payment/payment.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { HelppageComponent } from './helppage/helppage.component';
import { ChunkPipe } from './homepage/chunk.pipe';
import { BookaslotComponent } from './bookaslot/bookaslot.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SupportComponent } from './support/support.component';
import { TermsComponent } from './terms/terms.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { AdminHomepageComponent } from './adminhomepage/adminhomepage.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { CreditcardDialogComponent } from './creditcard-dialog/creditcard-dialog.component';
import { UpiDialogComponent } from './upi-dialog/upi-dialog.component';


@NgModule({
  declarations: [AppComponent, 
    WelcomepageComponent,
     LoginComponent, 
     signupcomponent, 
   
    AdminloginComponent, 
    HomepageComponent,

    PaymentComponent, 
    CartpageComponent, 
    HelppageComponent, 
    ChunkPipe, 
    BookaslotComponent, 
    AboutComponent, 
    TeamComponent, 
    SupportComponent, 
    TermsComponent, 
    FranchiseComponent,
    AdminHomepageComponent,
    FoodlistComponent,
    UserDetailsComponent,
    CheckoutpageComponent,
    CreditcardDialogComponent,
    UpiDialogComponent
  
  ],
  imports: [
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    RouterModule
 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
