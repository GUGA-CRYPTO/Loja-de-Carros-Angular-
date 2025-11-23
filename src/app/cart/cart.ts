import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../types/car';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartItems: { car: Car; quantity: number }[] = [];
  total = 0;

  constructor(private readonly cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  removeFromCart(index: number) {
    const carId = this.cartItems[index].car.id;
    this.cartService.removeFromCart(carId);
  }

  updateQuantity(index: number, quantity: number) {
    if (quantity > 0) {
      const carId = this.cartItems[index].car.id;
      this.cartService.updateQuantity(carId, quantity);
    }
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => 
      sum + (item.car.price * item.quantity), 0);
  }

  checkout() {
    if (confirm('Confirmar a compra?')) {
      alert('Compra realizada com sucesso!');
      this.cartService.clearCart();
    }
  }
}