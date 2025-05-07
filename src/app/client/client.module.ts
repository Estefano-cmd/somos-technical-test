import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PizzaListComponent } from './pages/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pages/pizza-detail/pizza-detail.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaDetailComponent,
    CartSummaryComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    MatDividerModule,
  ],
})
export class ClientModule {}
