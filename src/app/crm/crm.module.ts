import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesInputComponent } from './components/clientes-input/clientes-input.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    InicioComponent,
    NuevoClienteComponent,
    PerfilComponent,
    ClientesInputComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    ReactiveFormsModule
  ]
})
export class CrmModule { }
