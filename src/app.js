// Adaptador de interfaz (Misión 9). Lee eventos, llama a taskService y dibuja.
// Flujo: evento -> app.js -> taskService.js -> nuevo estado -> render() -> DOM
import {
  crearTarea, agregarTarea, cambiarEstado, eliminarTarea,
  obtenerPendientes, obtenerTerminadas, obtenerResumen
} from "./taskService.js";

// TODO Misión 9: estado inicial como array de objetos
//Mision 1: Cambiar el modelo de string a objeto ..
let tareas = [
  {id: 1, titulo: "Revisar requisitos", completada: false},
  
  {id: 2, titulo: "Disenar pruebas", completada: false},
  
  {id: 3, titulo: "Refactorizar codigo", completada: false}
];

// TODO Misión 9: render(), eventos de alta, cambio de estado, filtro y eliminar
function render() {
}

render();
