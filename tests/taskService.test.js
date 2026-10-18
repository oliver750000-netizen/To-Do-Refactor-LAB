import { describe, it, expect } from "vitest";
import {
  crearTarea, agregarTarea, buscarTarea, obtenerPendientes,
  obtenerTerminadas, cambiarEstado, eliminarTarea, obtenerResumen
} from "../src/taskService.js";

// Reemplacen cada it.todo por una prueba real con Arrange - Act - Assert.
// La suite final no debe tener pruebas pendientes.

describe("crearTarea", () => {
  it.todo("crea una tarea pendiente con id y título");
});

describe("agregarTarea", () => {
  it.todo("agrega la tarea a la colección");
  it.todo("el resultado contiene un elemento más");
  it.todo("no modifica el array original");
});

describe("buscarTarea", () => {
  it.todo("encuentra un id existente");
  it.todo("devuelve undefined con un id inexistente");
});

describe("obtenerPendientes / obtenerTerminadas", () => {
  it.todo("colección mixta");
  it.todo("ninguna pendiente");
  it.todo("colección vacía");
});

describe("cambiarEstado", () => {
  it.todo("cambia el estado de la tarea correcta");
  it.todo("no altera otra tarea");
  it.todo("un id inexistente conserva el contenido");
});

describe("eliminarTarea", () => {
  it.todo("elimina un id existente");
  it.todo("id inexistente");
  it.todo("colección vacía");
});

describe("obtenerResumen", () => {
  it.todo("devuelve total, pendientes y terminadas");
});
