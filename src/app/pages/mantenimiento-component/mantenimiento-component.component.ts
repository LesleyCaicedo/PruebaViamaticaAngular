import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento-component',
  templateUrl: './mantenimiento-component.component.html',
  styleUrl: './mantenimiento-component.component.css'
})
export class MantenimientoComponentComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'cedula', 'usuario', 'nombre', 'apellido', 'correo', 'fechanac', 'estatus', 'editar'];
  // dataSource:any = [
  //   { name: 'John', age: 25 },
  //   { name: 'Jane', age: 30 },
  //   { name: 'Bob', age: 35 }
  // ];

  dataSource:any = null;

  constructor(private auth:AuthServiceService, 
    private router:Router, 
    private userService:UserServiceService,
  private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    const sesion:any = localStorage.getItem("sesion")
    const dataSesion = sesion ? JSON.parse(sesion) : null

    if(dataSesion == null) {
      this.router.navigate(['sesion'])
    }

    if(dataSesion.rol === 'Admin') {
      this.auth.isAdmin(true)
    }

    this.userService.obtenerUsuarios().subscribe((resp:any) => {
      this.dataSource = resp.listaPersonas
    })
  }

  edit(element: any) {
    this.snackbar.open('Funcion por ser implementada pronto.. :)!', 'Aceptar', {
      duration: 5000
    });
  }
}
