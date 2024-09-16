import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.css'
})
export class AuthComponentComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  constructor(private authService: AuthServiceService, 
              private fb: FormBuilder,
            private router:Router, private snackbar:MatSnackBar) {
                this.loginForm = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required]
                });
              }

  ngOnInit(): void {
      this.authService.isInLogin(true)

      const sesion:any = localStorage.getItem("sesion")
      const dataSesion = sesion ? JSON.parse(sesion) : null

      if(dataSesion != null) {
        this.router.navigate(['inicio'])
      }
      
  }

  ngOnDestroy(): void {
      this.authService.isInLogin(false)
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.inicioSesion(username, password).subscribe((resp: any) => {
        if(resp.respuesta === "Sesion iniciada.") {
          localStorage.setItem("sesion", JSON.stringify(resp.usuario));

          if(resp.usuario.rol === 'Admin') {
            this.authService.isAdmin(true)
          }

          this.snackbar.open(`${resp.respuesta}`, 'Aceptar', {
            duration: 5000
          });

          this.router.navigate(['inicio']);
        } else {
          this.snackbar.open(`${resp.respuesta}`, 'Aceptar', {
            duration: 5000
          });
        }
      })

      
      // Implement login logic here
    }
  }

  onRegister(): void {
    this.router.navigate(['registro'])
  }
}
