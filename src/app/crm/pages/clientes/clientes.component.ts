import { Component, Input, OnInit } from '@angular/core';
import { CrmService } from '../../services/crm.service';
import { Cliente } from '../../interfaces/interface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [];
  
  constructor(private crmService: CrmService){}

  ngOnInit(): void {
    this.crmService.getCliente()
      .subscribe( clientes => {
        this.clientes = clientes;
       });
  }

}
