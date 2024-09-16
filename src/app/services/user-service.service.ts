import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrl: string = 'http://localhost:5055/api/Usuario'

  constructor(private htt:HttpClient) { }

  obtenerInfo(idUsuario:number) {
    return this.htt.get(`${this.apiUrl}/ObtenerInfo?idUsuario=${idUsuario}`);
  }

  obtenerIndicadores() {
    return this.htt.get(`${this.apiUrl}/ObtenerIndicadores`);
  }

  obtenerUsuarios() {
    return this.htt.get(`${this.apiUrl}/ObtenerUsuarios`);
  }
}
