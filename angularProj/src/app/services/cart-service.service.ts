import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();

  totalQty: Subject<number> = new Subject<number>();
  constructor() {}

  addToCart(theCartItem: CartItem) {
    let alreadyExisting: boolean = false;
    let existedCartItem: CartItem = undefined;
    if (this.cartItems.length > 0) {
      existedCartItem = this.cartItems.find(
        (tempCartItem) => tempCartItem.id === theCartItem.id
      );
      alreadyExisting = existedCartItem != undefined;
    }
    if (alreadyExisting) {
      console.log('in already existed');

      existedCartItem.quantity++;
      console.log(theCartItem.quantity);
    } else {
      this.cartItems.push(theCartItem);
    }

    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    let totPrice: number = 0;
    let totQty: number = 0;
    for (let item of this.cartItems) {
      totPrice += item.quantity * item.unitPrice;
      totQty += item.quantity;
    }
    console.log(`total price ${totPrice}€ and total quantity ${totQty}`);
    this.totalPrice.next(totPrice);
    this.totalQty.next(totQty);
  }
}
