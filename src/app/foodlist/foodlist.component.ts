import { Component } from '@angular/core';
import { CafeManagementService } from '../service/cafe-management-service';
import { ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Model/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartpageComponent } from '../cartpage/cartpage.component';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent {

  user: User;
  showProfile: boolean = false;
  imageIndex: number = 0;
  searchQuery: string = '';
  isDropdownOpen: boolean;
  username: string;
  showPopup: boolean = true;
  total: string = '';
  cartItems: any[] = [];
  selectedQuantity: number = 1;
  selectedItem: any[] =[];
  cartItemsInPopup: any[] = [];
  @ViewChild('popupOverlay') popupOverlay!: ElementRef;
  randomItemName: string;
  item:string;
  currentImageIndex: number = 0;
  selectedItemForModal: any;  // To store the selected item for the modal
  showModal: boolean = false; 
  showBottomModal: boolean = false;
  added: boolean = false;

  showCartPopup: boolean = false;

  selectedItems: any[] = [];

  dialogRef: any;
  calculateTotalForSelectedItems: any;
  sharedService: any;



 
  constructor( private cafaManagementService: CafeManagementService, private CartService: CartService, public router:Router, private activeRoute:ActivatedRoute ,  private dialog: MatDialog,

   
 ) { 

  }

 
  

  specialItems :any = [
   // { name: 'Veggie Pizza', price: '₹100', image: '/assets/images/Pizza.png', quantity: 0, isAddedToCart: false  },
    { name: 'Pepperoni Pizza', price: '₹200', image: '/assets/images/pizza3.png', quantity: 0, isAddedToCart: false },
  //  { name: 'Cheesey Pizza', price: '₹12.99', image: '/assets/images/pizza2.png', quantity: 0, isAddedToCart: false },
  //  { name: 'Margherita Pizza', price: '₹12.99', image: '/assets/images/pizza1.png', quantity: 0, isAddedToCart: false },
   // { name: 'Supreme Pizza', price: '₹12.99', image: '/assets/images/pizza6.png', quantity: 0, isAddedToCart: false },
    { name: 'Hawaiian Pizza', price: '₹300', image: '/assets/images/pizzamain.png', quantity: 0, isAddedToCart: false },
  ];

  regularItems:any=[

    {name: "Chicken Burger", price: '₹199' ,image:'/assets/images/burger.png', quantity:0 , isAddedToCart:false},
    {name: "Veg Burger" ,price: '₹129', image:'/assets/images/Burger2.png', quantity:0, isAddedToCart:false}

  ];

  items: any=[
    {name:"Doughnut", price:'₹109', image:'/assets/images/d1.png', quantity:0 ,isAddedToCart:false},
   // {name:'Choclate Doughnut' , price:'₹12.99', image:'/assets/images/Doughnuts.jpg', quantity:0 , isAddedToCart:false}
  ]

  dessertitem:any=[
    {name:"Straweberry muffin" , price:"₹159", image:'/assets/images/dessert3.png', quantity:0 , isAddedToCart:false}
  ];

  icecream:any=[
    {name:'Vennila' , price:'₹99', image:'/assets/images/vennelaice.png',quantity:0 , isAddedToCart:false}
  ];

  coffee:any=[
    {name:'Cappuccino' , price:"₹149", image:'/assets/images/coffee.png', quantity:0 , isAddedToCart:false}
  ]

  updateTotalAmount(): void {
    const totalAmount = this.calculateTotalForSelectedItems();
    this.sharedService.setTotalAmount(totalAmount);
  }
  addToCart(item: any): void {
    const existingItem = this.cartItemsInPopup.find(
      (cartItemsInPopup) => cartItemsInPopup.name === item.name
    );
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItemsInPopup.push({
        name: item.name,
        price: item.price,
        quantity: 1,
      });
      this.showPopup = this.cartItemsInPopup.length > 0;// Set showPopup to true when adding an item
    }
  }
  
  
  removeItemFromPopup(item: any): void {
    // Remove the item from the popup
    const index = this.cartItemsInPopup.findIndex((cartItem) => cartItem.name === item.name);
    if (index !== -1) {
      this.cartItemsInPopup.splice(index, 1);
    }
  }
  
  decreaseQuantityInPopup(item:any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
  
  increaseQuantityInPopup(item: any): void {
    item.quantity++;
  }
  
  calculateTotalInPopup(): string {
    const total = this.cartItemsInPopup.reduce((acc: number, item: { quantity: number; price: string; }) => {
      const itemTotal = Number(item.quantity) * parseFloat(item.price.replace('₹', ''));
      console.log(`Item: ${item.price}, Quantity: ${item.quantity}, Item Total: ${itemTotal}`);
      return acc + itemTotal;
    }, 0);
    console.log(`Total: ${total.toFixed(2)}`);
    return total.toFixed(2);
  }
  
  
 calculateGrandTotal(): string {
    let grandTotal = 0;

    for (const item of this.cartItems) {
      const itemPrice = Number(item.price.replace('₹', ''));
      grandTotal += itemPrice * item.quantity;
    }

    this.calculateTotalInPopup(); // Recalculate total as well
    return `₹${grandTotal.toFixed(2)}`;
  }

  increaseQuantity(foodItem: any): void {
    foodItem.quantity++;
    this.calculateGrandTotal();
  }

  decreaseQuantity(foodItem: any): void {
    if (foodItem.quantity > 1) {
      foodItem.quantity--;
      this.calculateGrandTotal();
    }
  }

    // Function to close the quantity popup
    closePopup(): void {
      this.showPopup = false;
      
    }
  
  
    placeOrder(): void {
      // Implement your order placement logic here
      console.log('Placing order...');
      // Close the pop-up after placing the order
      this.closePopup();
      this.router.navigateByUrl('/cart');
     
    }

    showPopupAndAddToCart(foodItem: any) {
      this.addToCart(foodItem); // Add the item to the cart
      this.showPopup = true; // Show the pop-up
    }

    closePopupAndReset() {
      this.showPopup = false; // Close the pop-up
      this.cartItemsInPopup = []; // Reset the pop-up content
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

    navigateToCheckoutPage(totalAmount: string) {
      this.router.navigateByUrl(`/checkout/${totalAmount}`);
    }
    

   
    
   

 
}

