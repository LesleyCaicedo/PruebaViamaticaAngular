import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-indicadores-component',
  templateUrl: './indicadores-component.component.html',
  styleUrl: './indicadores-component.component.css'
})
export class IndicadoresComponentComponent implements OnInit {

  indicadores: any = null;

  cards = [
    { title: 'Total Usuarios Activos', description: '', color: '#32CD32' },
    { title: 'Total Usuarios Inactivos', description: '', color: '#DAA520' },
    { title: 'Total Usuarios Bloqueados', description: '', color: '#B22222' },
    { title: 'Total Sesiones Fallidas', description: '', color: '#BA55D3' }
  ];

  constructor(private userService: UserServiceService, 
    private router:Router,
    private auth:AuthServiceService) { }

  ngOnInit(): void {

    const sesion:any = localStorage.getItem("sesion")
    const dataSesion = sesion ? JSON.parse(sesion) : null

    if(dataSesion == null) {
      this.router.navigate(['sesion'])
    } else {
      this.userService.obtenerIndicadores().subscribe((data: any) => {
        this.indicadores = data;
  
        if(this.indicadores != null) {
          this.cards[0].description = this.indicadores.activos;
          this.cards[1].description = this.indicadores.inactivos;
          this.cards[2].description = this.indicadores.bloqueados;
          this.cards[3].description = this.indicadores.totalSesionesFallidas;
        }
      });

      if(dataSesion.rol === 'Admin') {
        this.auth.isAdmin(true)
      }
    }
  }
}
