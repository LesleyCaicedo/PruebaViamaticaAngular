import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {

  flag: boolean = false;
  usuario:any = null

  constructor(private userService:UserServiceService, private router:Router) { }


  ngOnInit(): void {
    const sesion:any = localStorage.getItem("sesion")
    const dataSesion = sesion ? JSON.parse(sesion) : null

    if(dataSesion == null) {
      this.router.navigate(['sesion'])
    }

    this.getInfo()
  }

  getInfo() {
    const sesion:any = localStorage.getItem("sesion")
    const dataSesion = sesion ? JSON.parse(sesion) : null

    console.log(dataSesion)

    this.userService.obtenerInfo(dataSesion.idUsuario).subscribe((resp:any) => {
      this.usuario = resp;
      console.log(resp)
    })
  }
}
