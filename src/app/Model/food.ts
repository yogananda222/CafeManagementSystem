 
export class Food {
    item_id:number;
    fname:string;
    price:number;
    img : string
  static quantity: number;
    constructor(item_id:number, fname:string, price:number , img : string) {
          
          this.item_id= item_id;
          this.fname= fname;
          this.price= price;
          this.img=img
    }
}
