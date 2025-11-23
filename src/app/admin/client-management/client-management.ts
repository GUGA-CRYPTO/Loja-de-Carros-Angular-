import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../types/client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-management.html',
  styleUrls: ['./client-management.css']
})
export class ClientManagementComponent implements OnInit {
  clients: Client[] = [];
  newClient: Partial<Client> = {};
  selectedClient: Client | null = null;

  constructor(private readonly clientService: ClientService) { }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  addClient() {
    if (this.newClient.name && this.newClient.email && this.newClient.password) {
      this.clientService.createClient(this.newClient as Omit<Client, 'id'>).subscribe(client => {
        this.clients.push(client);
        this.newClient = {};
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios');
    }
  }

  selectClient(client: Client) {
    this.selectedClient = { ...client };
  }

  updateClient() {
    if (this.selectedClient) {
      this.clientService.updateClient(this.selectedClient).subscribe(updatedClient => {
        const index = this.clients.findIndex(c => String(c.id) === String(updatedClient.id));
        if (index >= 0) {
          this.clients[index] = updatedClient;
        }
        this.selectedClient = null;
      });
    }
  }

  deleteClient(id: number) {
    if (confirm('Tem certeza que deseja deletar este cliente?')) {
      this.clientService.deleteClient(id).subscribe(() => {
        this.clients = this.clients.filter(c => String(c.id) !== String(id));
        this.selectedClient = null;
      });
    }
  }

  cancelEdit() {
    this.selectedClient = null;
  }
}