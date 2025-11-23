import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../types/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-form.html',
  styleUrls: ['./car-form.css']
})
export class CarFormComponent implements OnInit {

  car: Car = {
    id: 0,
    name: '',
    brand: '',
    model: '',
    year: 0,
    price: 0,
    image: ''
  };

  isEditMode = false;
  isLoading = false;

  constructor(
    private readonly carService: CarService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('Id do carro da Rota (raw):', idParam);

    if (idParam !== null && idParam !== '') {
      this.isEditMode = true;
      this.carService.getCar(idParam).subscribe({
        next: (car) => {
          console.log('Carro carregado:', car);
          this.car = car;
        },
        error: (error) => {
          console.error('Erro ao carregar carro:', error);
          alert('Erro ao carregar carro. ID: ' + idParam + '. Erro: ' + JSON.stringify(error));
          this.router.navigate(['/admin/consultar']);
        }
      });
    }
  }

  onSubmit() {
    this.isLoading = true;
    console.log('isEditMode:', this.isEditMode);
    console.log('Car data:', this.car);

    if (this.isEditMode) {
      this.carService.updateCar(this.car).subscribe({
        next: () => {
          alert('Carro atualizado com sucesso!');
          this.router.navigate(['/admin/consultar']);
        },
        error: (error) => {
          console.error('Erro ao atualizar carro:', error);
          alert('Erro ao atualizar carro');
          this.isLoading = false;
        }
      });
    } else {
      const { id, ...carData } = this.car as any;
      this.carService.createCar(carData as Omit<Car, 'id'>).subscribe({
        next: () => {
          alert('Carro cadastrado com sucesso!');
          this.resetForm();
        },
        error: (error) => {
          console.error('Erro ao cadastrar carro:', error);
          alert('Erro ao cadastrar carro');
          this.isLoading = false;
        }
      });
    }
  }

  private resetForm() {
    this.car = {
      id: 0,
      name: '',
      brand: '',
      model: '',
      year: 0,
      price: 0,
      image: ''
    };
    this.isLoading = false;
  }
}