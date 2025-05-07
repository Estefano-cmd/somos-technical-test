import { Injectable } from '@angular/core';
import { Pizza } from '../interfaces/pizza';

export interface CartItem {
  pizza: Pizza;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { [id: string]: CartItem } = {};

  add(pizza: Pizza): void {
    if (!this.cart[pizza.id]) {
      this.cart[pizza.id] = { pizza, quantity: 1 };
    } else {
      this.cart[pizza.id].quantity++;
    }
  }

  remove(pizza: Pizza): void {
    if (this.cart[pizza.id]) {
      this.cart[pizza.id].quantity--;
      if (this.cart[pizza.id].quantity <= 0) {
        delete this.cart[pizza.id];
      }
    }
  }

  getItems(): CartItem[] {
    return Object.values(this.cart);
  }

  getTotalQuantity(): number {
    return Object.values(this.cart).reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }

  getTotalPrice(): number {
    return Object.values(this.cart).reduce(
      (sum, item) => sum + item.quantity * item.pizza.price,
      0
    );
  }
}
