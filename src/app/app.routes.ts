import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { CarListComponent } from './car-list/car-list';
import { AdminComponent } from './admin/admin';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './cart/cart';
import { CarFormComponent } from './admin/car-form/car-form';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'cars', component: CarListComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  
  { 
    path: 'admin',
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: [
      { path: '', component: AdminComponent },
      { path: 'cadastrar', component: CarFormComponent },
      { path: 'consultar', component: CarListComponent },
      { path: 'atualizar/:id', component: CarFormComponent },
      { path: 'deletar', component: CarListComponent }
    ]
  }
];
