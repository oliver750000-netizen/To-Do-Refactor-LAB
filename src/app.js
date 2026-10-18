// Adaptador de interfaz (Misión 9). Lee eventos, llama a taskService y dibuja.
// Flujo: evento -> app.js -> taskService.js -> nuevo estado -> render() -> DOM
import {
  crearTarea, agregarTarea, cambiarEstado, eliminarTarea,
  obtenerPendientes, obtenerTerminadas, obtenerResumen
} from "./taskService.js";

// TODO Misión 9: estado inicial como array de objetos
let tareas = [];

// TODO Misión 9: render(), eventos de alta, cambio de estado, filtro y eliminar
function render() {
}

render();
// Prueba de cambio para Git
// Prueba de Oliver
