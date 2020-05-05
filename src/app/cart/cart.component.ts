import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }

  clearItems() {
    this.cartService.clearCart();
    this.products = [];
  }
}
