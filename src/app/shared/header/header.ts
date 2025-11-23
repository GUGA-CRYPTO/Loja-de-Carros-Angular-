import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  isLoggedIn = false;
  cartCount = 0;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly cartService: CartService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.cartService.getCart().subscribe(items => {
      this.cartCount = items.reduce((count, item) => count + item.quantity, 0);
    });

    this.authService.getLoggedInUser().subscribe(user => {
      this.isLoggedIn = !!user;
      this.isAdmin = user?.role === 'admin';
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}