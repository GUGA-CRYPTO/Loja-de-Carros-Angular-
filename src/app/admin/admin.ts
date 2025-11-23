import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../types/car';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientManagementComponent } from './client-management/client-management';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ClientManagementComponent],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent implements OnInit {
  cars: Car[] = [];
  newCar: Partial<Car> = {};
  selectedCar: Car | null = null;

  constructor(private readonly carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  addCar() {
    this.carService.createCar(this.newCar as Car).subscribe(car => {
      this.cars.push(car);
      this.newCar = {};
    });
  }

  selectCar(car: Car) {
    this.selectedCar = {...car};
  }

  updateCar() {
    if (this.selectedCar) {
      this.carService.updateCar(this.selectedCar).subscribe(updatedCar => {
        const index = this.cars.findIndex(car => String(car.id) === String(updatedCar.id));
        if (index >= 0) {
          this.cars[index] = updatedCar;
        }
        this.selectedCar = null;
      });
    }
  }

  deleteCar(id: number | string) {
    this.carService.deleteCar(id).subscribe(() => {
      const idStr = String(id);
      this.cars = this.cars.filter(car => String(car.id) !== idStr);
    });
  }
}