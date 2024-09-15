import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private dataSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public data$: Observable<boolean> = this.dataSubject.asObservable();
  
  apiUrl: string = 'http://localhost:5055/api/Auth';

  constructor(private http:HttpClient) { }

  // Método para actualizar el valor
  isInLogin(newValue: boolean): void {
    this.dataSubject.next(newValue);
  }

  inicioSesion(usuario_correo:string, clave:string) {
    return this.http.get(`${this.apiUrl}/IniciarSesion?usuario_correo=${usuario_correo}&clave=${clave}`);
  }

  cerrarSesion(idUsuario:number) {
    return this.http.get(`${this.apiUrl}/CerrarSesion?idUsuario=${idUsuario}`, { responseType: 'text' });
  }
 }
