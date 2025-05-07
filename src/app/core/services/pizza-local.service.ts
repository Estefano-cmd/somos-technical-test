import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Pizza } from '../interfaces/pizza';
import { PizzaService } from './pizza.service';

@Injectable({
  providedIn: 'root',
})
export class PizzaLocalService extends PizzaService {
  private pizzas$ = new BehaviorSubject<Pizza[]>([
    {
      id: '1',
      name: 'Margarita',
      descriptor: 'Clásica pizza con tomate, mozzarella y albahaca',
      price: 8.5,
      imageUrl: 'assets/margarita.jpg',
    },
    {
      id: '2',
      name: 'Pepperoni',
      descriptor: 'Con mucho pepperoni y queso',
      price: 9.5,
      imageUrl: 'assets/pepperoni.jpg',
    },
  ]);

  getPizzas(): Observable<Pizza[]> {
    return this.pizzas$.asObservable();
  }

  addPizza(pizza: Pizza): Observable<void> {
    const current = this.pizzas$.getValue();
    this.pizzas$.next([...current, { ...pizza, id: Date.now().toString() }]);
    return of();
  }

  updatePizza(pizza: Pizza): Observable<void> {
    const updated = this.pizzas$
      .getValue()
      .map((p) => (p.id === pizza.id ? pizza : p));
    this.pizzas$.next(updated);
    return of();
  }

  deletePizza(id: string): Observable<void> {
    const filtered = this.pizzas$.getValue().filter((p) => p.id !== id);
    this.pizzas$.next(filtered);
    return of();
  }
}
