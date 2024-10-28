import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponentComponent } from './home-component/home-component.component';
import { TareasComponentComponent } from './tareas-component/tareas-component.component'; 
import { DetalleTareaComponentComponent } from './detalle-tarea-component/detalle-tarea-component.component'; 

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'tareas', component: TareasComponentComponent },
  { path: 'detalle/:id', component: DetalleTareaComponentComponent },
];

export const appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    importProvidersFrom(FormsModule, CommonModule),
    // Otros proveedores si es necesario
  ],
};
