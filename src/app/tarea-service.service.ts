import { Injectable } from '@angular/core';
import { Operacion } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  private tareasKey = 'tareas';

  constructor() { }

  obtenerTareas(): Operacion[]{
    const tareasJson = localStorage.getItem(this.tareasKey);
    return tareasJson ? JSON.parse(tareasJson) : [];
  }

  agregarTarea(tarea : Operacion): void{
    const tareas = this.obtenerTareas();
    tareas.push(tarea);
    localStorage.setItem(this.tareasKey, JSON.stringify(tareas));
  }

  eliminarTarea(id: number): void {
    let tareas = this.obtenerTareas();
    tareas = tareas.filter(tarea => tarea.id !== id);
    localStorage.setItem(this.tareasKey, JSON.stringify(tareas));
  }
  

  obtenerTareaPorId(id: number): Operacion | undefined {
    const tareas = this.obtenerTareas();
    return tareas.find(tarea => tarea.id === id);
  }
}
