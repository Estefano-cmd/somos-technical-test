import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pages/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pages/pizza-detail/pizza-detail.component';

const routes: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'detalle', component: PizzaDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
