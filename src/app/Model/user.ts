export class  User{
  username: string ;
  email : string;
  user_phone: number;
  userpassword: string;
  userid: number;
  

  constructor(username: string,  user_phone:number, userpassword:string , email : string, userid: number) {
          this.username= username;
          this.email= email;
          this.userpassword = userpassword;
          this.userid= userid;
          this.user_phone = user_phone;

  }
  
}
