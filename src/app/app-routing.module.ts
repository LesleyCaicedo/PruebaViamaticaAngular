import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './pages/auth-component/auth-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redireccionar al Home por defecto
  { path: 'inicio', component: HomeComponentComponent }, // Ruta para la página de inicio
  { path: 'sesion', component: AuthComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
