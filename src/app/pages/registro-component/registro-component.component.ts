import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro-component.component.html',
  styleUrl: './registro-component.component.css'
})
export class RegistroComponentComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private router:Router, 
    private auth:AuthServiceService,
  private snackbar:MatSnackBar) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      usuario1: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  onSubmit() {
    const body = JSON.stringify(this.registerForm.value)

    this.auth.registrar(body).subscribe((resp:any) => {
      if (resp != null && resp != undefined && String(resp).includes('Registro exitoso.')) {
        this.snackbar.open(`${resp}`, 'Aceptar', {
          duration: 15000
        });

        this.router.navigate(['sesion'])
      } else {
        this.snackbar.open(`${resp}`, 'Aceptar', {
          duration: 5000
        });
      }
    })
  }

  irSesion() {
    this.router.navigate(['/sesion']);
  }
}
