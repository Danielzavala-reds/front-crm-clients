import { Component, Output } from '@angular/core';
import { CrmService } from '../../services/crm.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  termino: string = ''
  noHayReg: string[] = [];

  constructor(private crmService: CrmService){}

  buscar(){
    this.crmService.buscarPorTermino(this.termino)
      .subscribe( res => {
        console.log(res)
      })
  }
 


}
