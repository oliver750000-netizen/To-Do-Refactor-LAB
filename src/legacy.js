// Versión inicial (legacy) - punto de comparación. NO se modifica.
// Código del PDF; solo se agregó la línea de `lista` y la llamada final para que corra.
const lista = document.getElementById("lista");

let tareas = [
  "Revisar requisitos",
  "Diseñar pruebas",
  "Refactorizar código"
];

function mostrarTareas() {
  lista.innerHTML = "";
  for (let i = 0; i < tareas.length; i++) {
    lista.innerHTML += `<li>${tareas[i]}</li>`;
  }
}

mostrarTareas();
