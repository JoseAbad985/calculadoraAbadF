import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TareaServiceService } from '../tarea-service.service'; 
import { Operacion } from '../tarea.model';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h2>Gestión de Operaciones</h2>
    <!-- Formulario para agregar tarea -->
    <div>
      <input
        type="text"
        [(ngModel)]="nuevoTitulo"
        placeholder="Nueva Operacion:"
      />
      <input
        type="text"
        [(ngModel)]="nuevaDescripcion"
        placeholder="Descripción de la Operacion"
      />
      <button (click)="agregarTarea()">Agregar Operacion</button>
    </div>

    <!-- Listado de tareas -->
    <ul>
      <li *ngFor="let tarea of tareas">
        <a [routerLink]="['/detalle', tarea.id]">{{ tarea.titulo }}</a>
        <button (click)="eliminarTarea(tarea.id)">Eliminar</button>
      </li>
    </ul>
  `,
})
export class TareasComponentComponent implements OnInit {
  tareas: Operacion[] = [];
  nuevoTitulo: string = '';
  nuevaDescripcion: string = '';

  constructor(private tareaService: TareaServiceService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareas = this.tareaService.obtenerTareas();
  }

  agregarTarea(): void {
    if (this.nuevoTitulo.trim() && this.nuevaDescripcion.trim()) {
      const nuevaTarea: Operacion = {
        id: Date.now(),
        titulo: this.nuevoTitulo,
        descripcion: this.nuevaDescripcion,
      };
      this.tareaService.agregarTarea(nuevaTarea);
      this.nuevoTitulo = '';
      this.nuevaDescripcion = '';
      this.cargarTareas();
    }
  }

  eliminarTarea(id: number): void {
    this.tareaService.eliminarTarea(id);
    this.cargarTareas();
  }
}
