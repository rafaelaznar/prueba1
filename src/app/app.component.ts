import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from './model';
import { GeneraPersonasService } from './generaPersonas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title: string = 'prueba1';
  numero_de_repeticiones: number = 0;
  repetir: boolean = false;
  nombre: string = 'rafa';
  personas: Persona[] = [];

  constructor(private oHttp: HttpClient, private oGeneraPersonasService: GeneraPersonasService) {
    this.repetir = true;
    this.numero_de_repeticiones = 10;
    this.title = 'prueba de DAW';
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
    this.getNombres();
  }

  getNombres(): void {
    this.oHttp.get<Persona[]>('http://localhost:8085/persona/genera/' + this.numero_de_repeticiones).subscribe({
      next: (data: Persona[]) => {
        console.log(data);
        this.personas = data;
        this.personas.push(this.oGeneraPersonasService.generate());
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  recargar(): void {
    this.getNombres();
  }

}