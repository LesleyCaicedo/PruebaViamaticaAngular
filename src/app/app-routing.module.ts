import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './pages/auth-component/auth-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { IndicadoresComponentComponent } from './pages/indicadores-component/indicadores-component.component';
import { MantenimientoComponentComponent } from './pages/mantenimiento-component/mantenimiento-component.component';
import { RegistroComponentComponent } from './pages/registro-component/registro-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redireccionar al Home por defecto
  { path: 'inicio', component: HomeComponentComponent }, // Ruta para la página de inicio
  { path: 'sesion', component: AuthComponentComponent },
  { path: 'registro', component: RegistroComponentComponent },
  { path: 'indicadores', component: IndicadoresComponentComponent },
  { path: 'mantenimiento', component: MantenimientoComponentComponent },
  { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
