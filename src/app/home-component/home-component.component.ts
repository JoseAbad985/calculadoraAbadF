import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { TareaServiceService } from '../tarea-service.service'; 
import { Operacion } from '../tarea.model';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterModule,RouterOutlet, CommonModule, FormsModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  a= 0
  b= 0
  c= 0

  sumar(){
    this.c = this.a + this.b;
  }
}





