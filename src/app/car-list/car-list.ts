import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Car } from '../types/car';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-list.html',
  styleUrls: ['./car-list.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  isAdmin = false;

  constructor(
    private readonly carService: CarService,
    private readonly cartService: CartService,
    private readonly authService: AuthService
  ) {
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  addToCart(car: Car) {
    this.cartService.addToCart(car);
  }

  deleteCar(id: number) {
    if (confirm('Tem certeza que deseja excluir este carro?')) {
      this.carService.deleteCar(id).subscribe(() => {
        this.loadCars();
      });
    }
  }

  buyCar(car: Car) {
    alert(`Você comprou o carro : ${car.name} Por R$${car.price}`);
  }
}