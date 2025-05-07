import { Component } from '@angular/core';
import { Pizza } from 'src/app/core/interfaces/pizza';
import { CartService } from 'src/app/core/services/cart.service';
import { PizzaService } from 'src/app/core/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss'],
})
export class PizzaListComponent {
  pizzas: Pizza[] = [];
  cart: { [id: string]: { pizza: Pizza; quantity: number } } = {};

  constructor(
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((pizzas) => (this.pizzas = pizzas));
  }

  addToCart(pizza: Pizza) {
    this.cartService.add(pizza);
  }

  removeFromCart(pizza: Pizza) {
    this.cartService.remove(pizza);
  }

  get totalQuantity() {
    return this.cartService.getTotalQuantity();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  getQuantity(pizza: Pizza): number {
    const item = this.cartService
      .getItems()
      .find((i) => i.pizza.id === pizza.id);
    return item ? item.quantity : 0;
  }
}
