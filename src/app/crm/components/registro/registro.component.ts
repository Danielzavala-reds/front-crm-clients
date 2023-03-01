import { Component, Input } from '@angular/core';
import { Cliente } from '../../interfaces/interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  @Input() cliente!: Cliente;
}
