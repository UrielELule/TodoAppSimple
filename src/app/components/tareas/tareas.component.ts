import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    //crear tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //agregar objeto a tarea al array
    this.listaTareas.push(tarea);

    //limpiar input

    this.nombreTarea = '';

  }

  eliminarTarea(index: number){
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number){
    this.listaTareas[index].estado = !tarea.estado
  }

}
