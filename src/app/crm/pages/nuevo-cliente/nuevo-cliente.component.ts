import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Cliente } from '../../interfaces/interface';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {

  @Output() onNuevoCliente: EventEmitter<FormGroup> = new EventEmitter();

  get clientesArr(){
    return this.miFormulario.get('clientes') as FormArray;
  }

  miFormulario: FormGroup = this.formBuilder.group({
    name: [, [Validators.required, Validators.minLength(3)],],
    number: [,[Validators.required,  Validators.minLength(10)]],
    email: [, [Validators.email]],
    placeWork: [,Validators.minLength(3)],
    desc: [, Validators.minLength(3)],
   
  });  

  

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
  }

  camposValidos(campo: string){

    

    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    this.onNuevoCliente.emit(this.miFormulario);

    console.log(this.miFormulario);
 
    this.miFormulario.reset();
  }

}
