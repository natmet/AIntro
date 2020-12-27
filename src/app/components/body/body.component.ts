import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {
  mostrarCita: boolean = false;

  frase: any = {
    mensaje: `El unico limite de
              nuestra realizacion
              del mañana, seran nuestras
              dudas del presente.`,
    autor: 'Franklin D. Rossevelt',
  };

  tecnologias: string[] = ['Angular', 'C#', 'Bootstrap', 'DevOps', 'Git'];
}
