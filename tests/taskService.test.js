import { describe, it, expect } from "vitest";
import {
  crearTarea, agregarTarea, buscarTarea, obtenerPendientes,
  obtenerTerminadas, cambiarEstado, eliminarTarea, obtenerResumen
} from "../src/taskService.js";

// Reemplacen cada it.todo por una prueba real con Arrange - Act - Assert.
// La suite final no debe tener pruebas pendientes.

describe("crearTarea", () => {
  it("crea una tarea pendiente con id y título", () => {
    // Arrange
    const id = 10;
    const titulo = "Diseñar pruebas";
    // Act
    const tarea = crearTarea(id, titulo);
    // Assert
    expect(tarea).toEqual({
      id: 10,
      titulo: "Diseñar pruebas",
      completada: false
    });
  });
});

describe("agregarTarea", () => {
  it("agrega la tarea a la colección", () => {
    const tareas = [{ id: 1, titulo: "Revisar requisitos", completada: false }];
    const nueva = { id: 2, titulo: "Diseñar pruebas", completada: false };
    const resultado = agregarTarea(tareas, nueva);
    expect(resultado).toEqual([
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: false }
    ]);
  });
  it("el resultado contiene un elemento más", () => {
    const tareas = [{ id: 1, titulo: "Revisar requisitos", completada: false }];
    const nueva = { id: 2, titulo: "Diseñar pruebas", completada: false };
    const resultado = agregarTarea(tareas, nueva);
    expect(resultado).toHaveLength(tareas.length + 1);
  });

  it("no modifica el array original", () => {
    const tareas = [{ id: 1, titulo: "Revisar requisitos", completada: false }];
    const nueva = { id: 2, titulo: "Diseñar pruebas", completada: false };
    agregarTarea(tareas, nueva);
    expect(tareas).toEqual([
      { id: 1, titulo: "Revisar requisitos", completada: false }
    ]);
  });
});

describe("buscarTarea", () => {
  it("encuentra un id existente", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ];
    // Act
    const resultado = buscarTarea(tareas, 2);
    // Assert
    expect(resultado).toEqual({ id: 2, titulo: "Diseñar pruebas", completada: true });
  });

  it("devuelve undefined con un id inexistente", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ];
    // Act
    const resultado = buscarTarea(tareas, 99);
    // Assert
    expect(resultado).toBeUndefined();
  });
});

describe("obtenerPendientes", () => {
  it("devuelve solo las pendientes en una colección mixta", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true },
      { id: 3, titulo: "Refactorizar código", completada: false }
    ];
    // Act
    const resultado = obtenerPendientes(tareas);
    // Assert
    expect(resultado).toEqual([
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 3, titulo: "Refactorizar código", completada: false }
    ]);
  });

  it("devuelve [] si ninguna está pendiente", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: true },
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ];
    // Act
    const resultado = obtenerPendientes(tareas);
    // Assert
    expect(resultado).toEqual([]);
  });

  it("devuelve [] con una colección vacía", () => {
    // Arrange
    const tareas = [];
    // Act
    const resultado = obtenerPendientes(tareas);
    // Assert
    expect(resultado).toEqual([]);
  });
});

describe("obtenerTerminadas", () => {
  it("devuelve solo las terminadas en una colección mixta", () => {
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true },
      { id: 3, titulo: "Refactorizar código", completada: true }
    ];
    const resultado = obtenerTerminadas(tareas);
    expect(resultado).toEqual([
      { id: 2, titulo: "Diseñar pruebas", completada: true },
      { id: 3, titulo: "Refactorizar código", completada: true }
    ]);
  });

  it("devuelve [] si ninguna está terminada", () => {
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: false }
    ];
    const resultado = obtenerTerminadas(tareas);
    expect(resultado).toEqual([]);
  });

  it("devuelve [] con una colección vacía", () => {
    const tareas = [];
    const resultado = obtenerTerminadas(tareas);
    expect(resultado).toEqual([]);
  });
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
