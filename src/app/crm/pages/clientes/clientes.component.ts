import { Component, OnInit } from '@angular/core';
import { CrmService } from '../../services/crm.service';
import { Cliente } from '../../interfaces/interface';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [];

  cliente!: Cliente;
  
  constructor(private crmService: CrmService,
              private dialog: MatDialog){}

  ngOnInit(): void {
   
    this.obtenerClientes();
  
  }

  get hayRegistros():string {
      if(this.clientes.length === 0){
       return `No hay registros`
      }

      return '';
  };

  borrar(id: string){
    const dialog = this.dialog.open(ConfirmarComponent, {
       width: '300px',
       height: '200px',
       data: this.cliente
     });
 
     dialog.afterClosed()
       .subscribe ( (res) => {
         if(res){
            this.crmService.borrarCliente(id)
             .subscribe( registro => {
               Swal.fire({
                 icon: 'error',
                 title: 'Eliminado',
                 text: 'Registro eliminado correctamente',
               })
               this.obtenerClientes();
             })
          }
       })
     }


  private obtenerClientes(){
    this.crmService.getClientes()
    .subscribe( registros => {
      console.log(registros);
      this.clientes = registros;
    });
  }

}
