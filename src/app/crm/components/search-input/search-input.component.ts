import { Component, Output } from '@angular/core';
import { CrmService } from '../../services/crm.service';
import { Cliente } from '../../interfaces/interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  termino: string = '';
  clientes: Cliente[] = [];
  clienteSeleccionado: Cliente | undefined;


  constructor(private crmService: CrmService){}

  buscando(){
    this.crmService.buscarPorTermino(this.termino.trim())
      .subscribe( cliente => {
       this.clientes = cliente;
      })
  };

  opcionSeleccionada( event: MatAutocompleteSelectedEvent  ){

    console.log(event.option.value);
    if(!event.option.value){
      this.clienteSeleccionado = undefined;
       return;
      }

    // console.log(event);
    const cliente: Cliente = event.option.value;
    console.log(cliente);
    this.termino = cliente.name;

    this.crmService.clientePorId(cliente.id!)
      .subscribe( cliente => {
        this.clienteSeleccionado = cliente;
      } )
  }

 


}
