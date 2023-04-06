import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CrmRoutingModule } from './crm-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

import { SearchInputComponent } from './components/search-input/search-input.component';
import { MaterialModule } from './material/material/material.module';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    InicioComponent,
    NuevoClienteComponent,
    PerfilComponent,
    SearchInputComponent,
    RegistroComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
    
  ]
})
export class CrmModule { }
