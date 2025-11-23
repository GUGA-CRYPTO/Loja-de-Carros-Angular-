import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../types/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly apiUrl = 'http://localhost:3000/cars';

  constructor(private readonly http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCar(id: number | string): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  createCar(car: Omit<Car, 'id'>): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${car.id}`, car);
  }

  deleteCar(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchCars(query: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}?q=${query}`);
  }
}