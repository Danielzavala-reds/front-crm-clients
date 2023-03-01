import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/interface';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrmService {

  private baseUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  agregarCliente(cliente: Cliente): Observable<Cliente> {

    return this.http.post<Cliente>(`${this.baseUrl}/clientes`, cliente)
  }
  actualizarCliente(cliente: Cliente): Observable<Cliente> {

    return this.http.put<Cliente>(`${this.baseUrl}/clientes/${cliente.id}`, cliente);
  }

  borrarCliente(id: string): Observable<any> {

    return this.http.delete<any>(`${this.baseUrl}/clientes/${id}`)
  }

  buscarPorTermino(termino: string): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(`${this.baseUrl}/clientes?q=${termino}&_limit=5`)

  }

  clientePorId(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/clientes/${id}`)
  }
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/clientes`)
  }

}
