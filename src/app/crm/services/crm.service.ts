import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  private baseUrl: string = 'http://localhost:3000/clientes'

  constructor( private http: HttpClient ) { }

  getCliente(): Observable<Cliente[]>{
    const url = this.baseUrl

    return this.http.get<Cliente[]>(url)
  }

}
