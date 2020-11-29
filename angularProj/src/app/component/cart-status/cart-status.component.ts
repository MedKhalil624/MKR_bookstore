import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  totalPriceCart: number = 0;
  totlaQuantityCart: number = 0;
  constructor(private _cartService: CartServiceService) {}

  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus() {
    this._cartService.totalPrice.subscribe((data) => {
      this.totalPriceCart = data;
    });
    this._cartService.totalQty.subscribe((data) => {
      this.totlaQuantityCart = data;
    });
  }
}
