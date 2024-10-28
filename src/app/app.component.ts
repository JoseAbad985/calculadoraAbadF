import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Inicio</a> |
      <a routerLink="/tareas">Operaciones</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
