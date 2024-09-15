import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent implements OnInit {

  flag: boolean = false;

  constructor(private auth:AuthServiceService,
    private snackbar:MatSnackBar,
    private  router:Router,
  private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.data$.subscribe(value => {
      this.flag = value
    })
  }

  cerrarSesion() {
    const sesion:any = localStorage.getItem("sesion")
    const dataSesion = sesion ? JSON.parse(sesion) : null

    //this.auth.isLogged(false)

    this.auth.cerrarSesion(dataSesion.idUsuario).subscribe((resp:any) => {
      this.snackbar.open(`${resp}`, 'Aceptar', {
        duration: 5000
      });
    });

    localStorage.clear()

    this.router.navigate(['sesion'])
  }
}
