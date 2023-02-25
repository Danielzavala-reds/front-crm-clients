import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'inicio', component: InicioComponent},
      {path:'perfil', component: PerfilComponent},
      {path: 'nuevo-cliente', component: NuevoClienteComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: '**', redirectTo: 'nuevo-cliente'}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
