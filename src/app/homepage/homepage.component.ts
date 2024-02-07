import { Component, OnInit } from '@angular/core';
import { CafeManagementService } from '../service/cafe-management-service';
import { ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Model/user';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {


  user: User;
  showProfile: boolean = false;
  username:string='Yoga';
  showCartPopup: boolean = false;
  imageIndex: number = 0;
  searchQuery: string = '';
  isDropdownOpen: boolean;
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

  items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    
  ];

  images: string[] = ['/assets/images/jpg 3.jpg', '/assets/images/jpg5.jpg', '/assets/images/jpg6.jpg',
  '/assets/images/jpg 2.jpg','/assets/images/jpg 1.jpg','/assets/images/jpg 4.jpg','/assets/images/jpg 6.jpg'
];
 

  specialItems = [
    { name: 'Chicken Burger', price: '$10.99', image: '/assets/images/burger.png', quantity: 0, isAddedToCart: false  },
    { name: 'Pizza', price: '$12.99', image: '/assets/images/pizza3.png', quantity: 0, isAddedToCart: false },
    { name: 'Cofee', price: '$12.99', image: '/assets/images/coffee.png', quantity: 0, isAddedToCart: false },
    { name: 'CupCakes', price: '$12.99', image: '/assets/images/dessert3.png', quantity: 0, isAddedToCart: false },
    { name: 'Doughnuts', price: '$12.99', image: '/assets/images/loginimage2.png', quantity: 0, isAddedToCart: false },
    { name: 'Sandwich', price: '$12.99', image: '/assets/images/sandwich1.png', quantity: 0, isAddedToCart: false },
  ];

  regularItems = [
    { name: 'Regular Sandwich', price: '$6.99', image: '/assets/images/burger.png', quantity: 0, isAddedToCart: false },
    { name: 'Regular Sandwich', price: '$6.99', image: '/assets/images/burger.png ', quantity: 0, isAddedToCart: false },
    { name: 'Regular Salad', price: '$8.99', image: '/assets/images/burger.png ', quantity: 0, isAddedToCart: false },
   // { name: 'Regular Sandwich', price: '$6.99', image: '/assets/images/burger.png ', quantity: 0, isAddedToCart: false },
    //{ name: 'Regular Salad', price: '$8.99', image: '/assets/images/burger.png ', quantity: 0, isAddedToCart: false },
    //{ name: 'Regular Sandwich', price: '$6.99', image: '/assets/images/burger.png', quantity: 0, isAddedToCart: false },
    //{ name: 'Regular Salad', price: '$8.99', image: '/assets/images/burger.png', quantity: 0, isAddedToCart: false },
    // Add more regular items
  ];
  
    constructor( private cafaManagementService: CafeManagementService, private cartService: CartService,  public router:Router, private activeRoute:ActivatedRoute) { 

    }


   
  


    


    addToCart(item: any): void {
      this.cartService.addToCart(item);
      item.isAddedToCart = true; // Set the flag to indicate the item has been added to the cart
    }


    openAddToCartModal(item: any): void {
      this.selectedItemForModal = item;
      this.selectedItem.push(item);
      this.showModal = true;
    }
  
    // Method to close the modal
    closeAddToCartModal(): void {
      this.showModal = false;
    }

   
    
    nextImage(): void {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
  
    prevImage(): void {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }

    onAddClick() {
      this.added = !this.added;
    }

    navigateToOtherPage() {
      // Assuming you have a route defined for the other page
      this.router.navigateByUrl('/foodlist');
    }

    

    navigateToItemsPage() {
     
      this.router.navigateByUrl('/foodlist');
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
    
    


    
  

 
    
   
    
  } 
     

  