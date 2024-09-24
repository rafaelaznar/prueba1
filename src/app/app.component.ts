import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'prueba1';
  numero_de_repeticiones: number = 0;
  repetir: boolean = false;
  nombre: string = 'rafa';
  personas:any = [];

  constructor(private oHttp: HttpClient) {
    this.repetir = true;
    this.numero_de_repeticiones = 10;
    this.title = 'prueba de DAW';
    this.getNombres();
  }

  getNombres(): void {
    this.oHttp.get('http://localhost:8085/persona/genera/10').subscribe({
      next: (data: any) => {
        console.log(data);
        this.personas = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  recargar(): void {
    this.getNombres();
  }

}