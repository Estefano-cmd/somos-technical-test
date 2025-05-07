import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../interfaces/pizza';
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { PizzaService } from './pizza.service';

@Injectable({
  providedIn: 'root',
})
export class PizzaFirebaseService extends PizzaService {
  private collectionRef = collection(this.firestore, 'pizzas');

  constructor(private firestore: Firestore) {
    super();
  }

  getPizzas(): Observable<Pizza[]> {
    return collectionData(this.collectionRef, { idField: 'id' }) as Observable<
      Pizza[]
    >;
  }

  addPizza(pizza: Pizza): Observable<void> {
    return new Observable<void>((observer) => {
      addDoc(this.collectionRef, pizza).then(() => {
        observer.next();
        observer.complete();
      });
    });
  }

  updatePizza(pizza: Pizza): Observable<void> {
    const docRef = doc(this.firestore, `pizzas/${pizza.id}`);
    return new Observable<void>((observer) => {
      updateDoc(docRef, { ...pizza }).then(() => {
        observer.next();
        observer.complete();
      });
    });
  }

  deletePizza(id: string): Observable<void> {
    const docRef = doc(this.firestore, `pizzas/${id}`);
    return new Observable<void>((observer) => {
      deleteDoc(docRef).then(() => {
        observer.next();
        observer.complete();
      });
    });
  }
}
