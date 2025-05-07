import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from 'src/app/core/services/pizza.service';
import { Pizza } from 'src/app/core/interfaces/pizza';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss'],
})
export class PizzaFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pizzaService: PizzaService,
    public dialogRef: MatDialogRef<PizzaFormComponent>,
    @Inject(MAT_DIALOG_DATA) public pizza: Pizza | null
  ) {
    this.form = this.fb.group({
      name: [pizza?.name || '', Validators.required],
      descriptor: [pizza?.descriptor || '', Validators.required],
      price: [pizza?.price || 0, [Validators.required, Validators.min(1)]],
      imageUrl: [pizza?.imageUrl || '', Validators.required],
    });
  }

  save(): void {
    const value = this.form.value;
    const pizza: Pizza = this.pizza
      ? { ...this.pizza, ...value }
      : { ...value, id: '' };

    const obs = this.pizza
      ? this.pizzaService.updatePizza(pizza)
      : this.pizzaService.addPizza(pizza);

    obs.subscribe(() => this.dialogRef.close());
  }
}
