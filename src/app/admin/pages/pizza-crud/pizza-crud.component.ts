import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/core/services/pizza.service';
import { Pizza } from 'src/app/core/interfaces/pizza';
import { MatDialog } from '@angular/material/dialog';
import { PizzaFormComponent } from '../..//components/pizza-form/pizza-form.component';

@Component({
  selector: 'app-pizza-crud',
  templateUrl: './pizza-crud.component.html',
  styleUrls: ['./pizza-crud.component.scss'],
})
export class PizzaCrudComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((pizzas) => (this.pizzas = pizzas));
  }

  openDialog(pizza?: Pizza): void {
    this.dialog.open(PizzaFormComponent, {
      width: '90%',
      maxWidth: '600px',
      minWidth: '300px',
      panelClass: 'pizza-dialog',
      autoFocus: false,
      disableClose: true,
      data: pizza || null,
    });
  }

  deletePizza(pizza: Pizza): void {
    if (confirm(`¿Eliminar la pizza "${pizza.name}"?`)) {
      this.pizzaService.deletePizza(pizza.id).subscribe();
    }
  }
}
