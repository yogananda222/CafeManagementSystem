import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { Admin } from '../Model/admin';
import { Food} from '../Model/food';
import { OrderService } from '../Model/order.service';
import { Payment } from '../Model/payment';

@Injectable({
  providedIn: 'root'
})
export class CafeManagementService {
 

  private userlisturl="http://localhost:8080/user/list";

  private foodlisturl="http://localhost:8080/Food/list";

  private ordersviewurl="http://localhost:8080/orders/vieworders";

  private paymentviewurl="http://localhost:8080/payment"; 

  private addfooodurl="http://localhost:8080/Food/addfood";

  private getfoodbyidurl="http://localhost:8080/Food/find";

  private updatefoodurl="http://localhost:8080/Food/update";

  private deletefoodurl="http://localhost:8080/Food/delete";

  private adminloginurl="http://localhost:8080/admin/login";

  private usersignupurl="http://localhost:8080/user/signup";

  private userloginurl="http://localhost:8080/user/login";

  private gettinguserbyidurl="http://localhost:8080/user";

  private updateuserbyidurl="http://localhost:8080/user/update";

  private userdeletebyidurl="http://localhost:8080/user/delete";

  private getorderbyIdurl="http://localhost:8080/orders";

  private getorderbyuseridurl="http://localhost:8080/orders/user";

  private createorderbyproductidurl="http://localhost:8080/orders/create";

  private deleteorderbyidurl="http://localhost:8080/orders/delete";

  private  getpaymentbyidurl="http://localhost:8080/payment/orderId";

  private addpaymenturl="http://localhost:8080/payment";

  private getpaymentbypaymentidurl="http://localhost:8080/payment/1";

  private deletepaymenturl="http://localhost:8080/payment/deleteOrder";

  
  

  constructor(private http: HttpClient) { }

  
     //SignUP-User
    
    saveUser(user: User): Observable<User> {
      const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
  return this.http.post<User>(this.usersignupurl, user, httpOptions);
}

    
//Login-user
    loginuser(user: User): Observable<User> {
      console.log(user);
      return this.http.post<User>(`${this.userloginurl}`, user);
    }
  
    //GetUserById
    getuserbyid(uid: number):Observable<User>  {
      const uidUrl = this.gettinguserbyidurl + "/" + uid;
      return this.http.get<User>(uidUrl);
    }
  
    updateuser(user: User ): Observable<User> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'auth-token',
          'Access-Control-Allow-Origin': '*'
        })
      };
      return this.http.put<User>(this.updateuserbyidurl +`/${user}`, user, httpOptions);
    }

    //delete user by id


deleteCustomer(id: number) {
   
  const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
    })
  };
  return  this.http.delete<User>(this.userdeletebyidurl+`/${id}`,httpOptions);
}
  
    //Login-Admin
  getadminlogin(admin: Admin): Observable<Admin> {
    console.log(admin);
    return this.http.post<Admin>(`${this.adminloginurl}`, admin);
  }

  //add food
  SaveMenu(food:Food):Observable<Food>
  {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.post<Food>(this.addfooodurl,food,httpOptions);
  }
  //Update Food
  updateFood(food: Food): Observable<Food> {
    const headers = { 'content-type': 'application/json' };
    return this.http.put<Food>(this.updatefoodurl, food, { 'headers': headers });
  }
  
  //delete food by ID
  deleteMenu(id: number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Food>(this.deletefoodurl+`/${id}`,httpOptions);
  }
  getAllMenu(): Observable<Food[]> {
    return this.http.get<Food[]>(this.foodlisturl);
  }
  
  getAllOrder(): Observable<OrderService[]> {
    return this.http.get<OrderService[]>(this.ordersviewurl);
  }
  
  getorderbyid(uid: number): Observable<OrderService> {
    // Assuming OrderService is the correct type here
    const uidUrl = this.getorderbyIdurl + "/" + uid;
    return this.http.get<OrderService>(uidUrl);
  }
  
  // Repeat the same pattern for other methods using proper types
  
//Get order by user id 
getorderbyuserid(uid: number):Observable<OrderService>  {
  const uidUrl = this.getorderbyuseridurl+ "/" + uid;
  return this.http.get<OrderService>(uidUrl);
}

//delete Order by order id. 
deleteOrder(id: number): Observable<OrderService> {
  const headers = new HttpHeaders({ 'Authorization': 'auth-token' }); 
  const url = `${this.deleteorderbyidurl}/${id}`;
  return this.http.delete<OrderService>(url, { headers });
}

createOrder(order: OrderService, productId: number): Observable<OrderService> {
  return this.http.post<OrderService>(`${this.createorderbyproductidurl}/create/${productId}`, order);
}

//GetMenuById
getfoodbyid(uid: number):Observable<Food>  {
  const uidUrl = this.getfoodbyidurl + "/" + uid;
  return this.http.get<Food>(uidUrl);
}
//GetpaymentById
getpaymentbypaymentid(uid: number):Observable<Payment>  {
  const uidUrl = this.getpaymentbyidurl + "/" + uid;
  return this.http.get<Payment>(uidUrl);
}

//Get All Payments
getAllPayments():Observable<any>
{
 return this.http.get(this.paymentviewurl);
}

//delete payment by  orderID
deletePayment(id: number) {
   
  const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
    })
  };
  return  this.http.delete<Payment>(this.deletepaymenturl+`/${id}`,httpOptions);
}
//GetpaymentBycustomerId
getpaymentbyid(uid: number):Observable<Payment>  {
  const uidUrl = this.getpaymentbypaymentidurl + "/" + uid;
  return this.http.get<Payment>(uidUrl);
}

//add payments code
addPayment(payment: any, orderId: number, customerId: number): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.addpaymenturl}/${orderId}/${customerId}`;
  return this.http.post(url, payment, { headers });
}
  }
  






   


