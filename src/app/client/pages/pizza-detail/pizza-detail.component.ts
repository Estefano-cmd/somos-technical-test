import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/interfaces/cart-item';
import { Pizza } from 'src/app/core/interfaces/pizza';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss'],
})
export class PizzaDetailComponent implements OnInit {
  items: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.quantity * item.pizza.price,
      0
    );
  }

  addToCart(pizza: Pizza): void {
    this.cartService.add(pizza);
    this.items = this.cartService.getItems();
  }

  removeFromCart(pizza: Pizza): void {
    this.cartService.remove(pizza);
    this.items = this.cartService.getItems();
  }
}
