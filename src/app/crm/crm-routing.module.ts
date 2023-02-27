import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EditarComponent } from './pages/editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'inicio', component: InicioComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'nuevo-cliente', component: NuevoClienteComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'editar/:id', component: NuevoClienteComponent},
      {path: ':id', component: ClientesComponent},
      {path: '**', redirectTo: 'inicio'}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
