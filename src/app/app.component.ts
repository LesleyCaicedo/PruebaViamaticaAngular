import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'prueba-viamatica';

  flag: boolean = false;

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
      this.authService.data$.subscribe(value => {
        this.flag = value
      })
  }
}
