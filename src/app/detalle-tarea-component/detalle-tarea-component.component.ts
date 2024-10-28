import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaServiceService } from '../tarea-service.service';
import { Operacion } from '../tarea.model';

@Component({
  selector: 'app-detalle-tarea-component',
  standalone: true,
  imports: [],
  templateUrl: './detalle-tarea-component.component.html',
  styleUrl: './detalle-tarea-component.component.css'
})

export class DetalleTareaComponentComponent {
  tarea: Operacion | undefined;


  constructor(
    private route: ActivatedRoute,
    private TareaService: TareaServiceService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tarea = this.TareaService.obtenerTareaPorId(id);
  }
}
