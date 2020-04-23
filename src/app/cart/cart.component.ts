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
    console.log('items: ' + this.cartService.getItems());
    this.products = this.cartService.getItems();
  }
}
