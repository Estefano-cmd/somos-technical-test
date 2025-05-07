import { Observable } from 'rxjs';
import { Pizza } from '../interfaces/pizza';

export abstract class PizzaService {
  abstract getPizzas(): Observable<Pizza[]>;
  abstract addPizza(pizza: Pizza): Observable<void>;
  abstract updatePizza(pizza: Pizza): Observable<void>;
  abstract deletePizza(id: string): Observable<void>;
}
