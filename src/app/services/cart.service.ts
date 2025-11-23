import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../types/car';

interface CartItem {
  car: Car;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next(this.cartItems);
    }
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(car: Car) {
    const existingItem = this.cartItems.find(item => item.car.id === car.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ car, quantity: 1 });
    }

    this.updateCart();
  }

  removeFromCart(carId: number) {
    this.cartItems = this.cartItems.filter(item => item.car.id !== carId);
    this.updateCart();
  }

  updateQuantity(carId: number, quantity: number) {
    const item = this.cartItems.find(item => item.car.id === carId);
    if (item && quantity > 0) {
      item.quantity = quantity;
      this.updateCart();
    }
  }

  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }

  getCartCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => 
      total + (item.car.price * item.quantity), 0);
  }
}
