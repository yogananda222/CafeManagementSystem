import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: { name: any; }) {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItemsSubject.next([...currentItems]);
  }

  removeFromCart(item: { name: any; }) {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter((cartItem) => cartItem.name !== item.name);

    this.cartItemsSubject.next([...updatedItems]);
  }

  increaseQuantity(item: { quantity: number; }) {
    item.quantity++;
    this.cartItemsSubject.next([...this.cartItemsSubject.getValue()]);
  }

  decreaseQuantity(item: { quantity: number; }) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartItemsSubject.next([...this.cartItemsSubject.getValue()]);
    }
  }

  
}
