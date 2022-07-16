let tareas = [];
let listaTareas = document.querySelector("#listaTareas");
let formTarea = document.querySelector("#formtarea");
formTarea.addEventListener("submit", agregarTarea);

function agregarTarea(e) {
  e.preventDefault();
  tareas.push(document.querySelector("#tarea").value);
  crearItem(document.querySelector("#tarea").value, tareas.length - 1);
  formTarea.reset();
}

function crearItem(tarea, indice) {
  listaTareas.innerHTML += `<li class="list-group-item d-flex justify-content-between"><p class="m-0">${tarea}</p>
    <button class="btn btn-danger" onclick="eliminarTarea(${indice})"><i class="bi bi-clipboard-minus-fill"></i></button></li>`;
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  listaTareas.innerHTML = "";
  tareas.forEach((tarea, posicion) => crearItem(tarea, posicion));
}
