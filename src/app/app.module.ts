import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponentComponent } from './pages/auth-component/auth-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IndicadoresComponentComponent } from './pages/indicadores-component/indicadores-component.component';
import { MantenimientoComponentComponent } from './pages/mantenimiento-component/mantenimiento-component.component';
import { RegistroComponentComponent } from './pages/registro-component/registro-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
    IndicadoresComponentComponent,
    MantenimientoComponentComponent,
    RegistroComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
