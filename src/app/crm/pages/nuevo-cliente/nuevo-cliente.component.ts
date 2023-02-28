import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../interfaces/interface';
import { CrmService } from '../../services/crm.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {

  // miFormulario: FormGroup
  cliente!: Cliente;

  // Guardamos el id del cliente
  clienteId!: string;

  miFormulario: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)],],
    number: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.email]],
    placeWork: ['', Validators.minLength(3)],
    desc: ['', Validators.minLength(3)],
    id: [''],
  });

  constructor(private formBuilder: FormBuilder,
    private crmService: CrmService,
    private activatedRoute: ActivatedRoute,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {

    /* Validacioón para confirmar que estamos en la ruta para editar algún registro y no nos marque error 'undefined' en la ruta */
    if( !this.route.url.includes(`home/editar`) ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.crmService.clientePorId(id)),
      )
      .subscribe((cliente: Cliente) => {
        /* Metodo para que los valores al momento de editar el cliente se muestren */
        this.clienteId = cliente.id!;
        this.miFormulario.patchValue(cliente);
         console.log('Editando cliente', cliente);
      })


  }

  camposValidos(campo: string) {
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    
    if (this.clienteId) {
      // Actualizamos cliente
      this.crmService.actualizarCliente( this.miFormulario.value )
        .subscribe(res => console.log('Actualizado', res))
    } else {
     // // Crear cliente
     this.crmService.agregarCliente(this.miFormulario.value)
       .subscribe(res => {
         console.log(res);
         this.miFormulario.reset();
    })
    // // console.log(this.miFormulario.value);
  }
  

  };

  borrar(){
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.crmService.borrarCliente(id) ),
      )
      .subscribe(res => {
        this.route.navigate(['/home/clientes'])
      })
  }

};
