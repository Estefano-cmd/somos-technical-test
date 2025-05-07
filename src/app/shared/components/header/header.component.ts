import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Auth, user } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user$: Observable<import('firebase/auth').User | null>;

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService,
    private auth: Auth
  ) {
    this.user$ = user(this.auth);
  }

  get totalQuantity() {
    return this.cartService.getTotalQuantity();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  navigateToCart() {
    this.router.navigate(['/client/detalle']);
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/client']);
    });
  }

  login(): void {
    this.router.navigate(['/auth']);
  }
}
