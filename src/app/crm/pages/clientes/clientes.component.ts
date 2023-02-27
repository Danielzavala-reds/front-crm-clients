import { Component, OnInit } from '@angular/core';
import { CrmService } from '../../services/crm.service';
import { Cliente } from '../../interfaces/interface';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [];

  cliente!: Cliente;
  
  constructor(private crmService: CrmService,
              private router: Router,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.crmService.getClientes()
      .subscribe( clientes => {
        // console.log(clientes);
        this.clientes = clientes;
       });

  
  }

  get hayRegistros():string {
      if(this.clientes.length === 0){
       return `Aún no hay registros`
      }

      return ``;
  }


}
