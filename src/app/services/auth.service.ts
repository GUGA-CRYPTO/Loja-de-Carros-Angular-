import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Client } from '../types/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loggedInUser = new BehaviorSubject<Client | null>(null);
  private readonly apiUrl = 'http://localhost:3000/clients';

  constructor(private readonly http: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.loggedInUser.next(JSON.parse(savedUser));
    }
  }

  login(email: string, password: string): Observable<Client | null> {
    const isAdmin = email.toLowerCase().includes('admin');
    
    if (isAdmin) {
      if (password !== 'password') {
        return of(null);
      }
      
      const adminUser: Client = {
        id: Math.floor(Math.random() * 1000),
        name: 'Admin User',
        email: email,
        password: password,
        role: 'admin'
      };
      
      this.loggedInUser.next(adminUser);
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      return of(adminUser);
    }
    
    console.log('[AUTH] Buscando cliente com email:', email);
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(clients => {
        console.log('[AUTH] Clientes retornados:', clients);
        const foundClient = clients.find(
          client => client.email === email && client.password === password
        );
        
        console.log('[AUTH] Cliente encontrado:', foundClient);
        
        if (foundClient) {
          const user: Client = {
            ...foundClient,
            id: Number(foundClient.id) || foundClient.id,
            role: 'client'
          };
          
          console.log('[AUTH] Usuário criado:', user);
          this.loggedInUser.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
        
        console.log('[AUTH] Nenhum cliente encontrado');
        return null;
      })
    );
  }

  logout(): void {
    this.loggedInUser.next(null);
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.loggedInUser.value !== null;
  }

  isAdmin(): boolean {
    const user = this.loggedInUser.value;
    return user?.role === 'admin' || false;
  }

  getCurrentUser(): Client | null {
    return this.loggedInUser.value;
  }

  getLoggedInUser(): Observable<Client | null> {
    return this.loggedInUser.asObservable();
  }
}