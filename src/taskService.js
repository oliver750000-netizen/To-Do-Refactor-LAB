// Lógica de dominio. Aquí NO debe aparecer document, querySelector ni innerHTML.
// Cada función está sin implementar: la prueba debe fallar primero (RED).

export function crearTarea(id, titulo) {
  return { id, titulo, completada: false };
}

export function agregarTarea(tareas, nuevaTarea) {
  return [...tareas, nuevaTarea];
}

export function buscarTarea(tareas, id) {
  throw new Error("Misión 4 pendiente");
}

export function obtenerPendientes(tareas) {
  throw new Error("Misión 5 pendiente");
}

export function obtenerTerminadas(tareas) {
  throw new Error("Misión 5 pendiente");
}

export function cambiarEstado(tareas, id) {
  throw new Error("Misión 6 pendiente");
}

export function eliminarTarea(tareas, id) {
  throw new Error("Misión 7 pendiente");
}

export function obtenerResumen(tareas) {
  throw new Error("Misión 8 pendiente");
}
