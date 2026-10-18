// Lógica de dominio. Aquí NO debe aparecer document, querySelector ni innerHTML.
// Cada función está sin implementar: la prueba debe fallar primero (RED).

export function crearTarea(id, titulo) {
  return { id, titulo, completada: false };
}

export function agregarTarea(tareas, nuevaTarea) {
  return [...tareas, nuevaTarea];
}

export function buscarTarea(tareas, id) {
  return tareas.find(t => t.id === id);
}

export function obtenerPendientes(tareas) {
  return tareas.filter(t => !t.completada);
}

export function obtenerTerminadas(tareas) {
  return tareas.filter(t => t.completada);
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
