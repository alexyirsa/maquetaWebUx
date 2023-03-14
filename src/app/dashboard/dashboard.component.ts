import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  titulo1: String = "Conexión con Alexa";
  titulo2: String = "Alarma Online";
  titulo3: String = "Configuración Cuenta";
  titulo4: String = "Salir";

  constructor() { }

  ngOnInit(): void {
  }

}
