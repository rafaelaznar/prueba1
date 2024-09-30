import { Injectable } from '@angular/core';
import { Persona } from './model';

@Injectable({
  providedIn: 'root'
})

export class GeneraPersonasService {

  constructor() { }

  generate(): Persona {
    let persona: Persona = {
      nombre: 'rafa',
      apellido1: 'gomez',
      apellido2: 'garcia',
      email: 'rafagomez@ausiasmarch.net'
    }
    return persona;
  }


  
}
