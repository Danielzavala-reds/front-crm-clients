import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Cliente } from '../interfaces/interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrmService {
  
  private baseUrl: string = 'http://localhost:3000'

  constructor( private http: HttpClient ) { }
  
  agregarCliente( cliente: Cliente ): Observable<Cliente>{
      
    return this.http.post<Cliente>(`${this.baseUrl}/clientes`, cliente)
  }
  actualizarCliente( name: string, number: string, email: string, placeWork: string, desc: string, id: string ): Observable<Cliente>{
    const url = `${this.baseUrl}/clientes/${id}`;
    const body = {name, number, email, placeWork, desc, id }
     return this.http.put<Cliente>(url, body);
  }

  borrarCliente( id: string ): Observable<any>{

    return this.http.delete<any>(`${this.baseUrl}/clientes/${id}` )
  }

  clientePorId(id: string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}/clientes/${id}`)
  }
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}/clientes`)
  }
}
