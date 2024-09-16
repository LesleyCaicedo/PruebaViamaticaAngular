import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {

  flag: boolean = false;
  usuario:any = null

  constructor(private userService:UserServiceService, 
    private router:Router, 
    private auth:AuthServiceService) { }


  ngOnInit(): void {
    const sesion:any = localStorage.getItem("sesion")
    const dataSesion = sesion ? JSON.parse(sesion) : null

    if(dataSesion == null) {
      this.router.navigate(['sesion'])
    }

    if(dataSesion.rol === 'Admin') {
      this.auth.isAdmin(true)
    }

    this.getInfo()
  }

  getInfo() {
    const sesion:any = localStorage.getItem("sesion")
    const dataSesion = sesion ? JSON.parse(sesion) : null

    this.userService.obtenerInfo(dataSesion.idUsuario).subscribe((resp:any) => {
      this.usuario = resp;
    })
  }
}
