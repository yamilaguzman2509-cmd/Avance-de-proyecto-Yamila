function agregar() {
    let actividad = document.getElementById("actividad").value;
    let tipo = document.getElementById("tipo").value;
    let lista = document.getElementById("lista");

    // VALIDACIÓN MEJORADA
    if (actividad.trim() === "") {
        alert("Escribe una actividad valida por favor");
        return;
    }

    // LIMPIAR MENSAJE SI EXISTE
    if (lista.textContent.includes("No hay actividades aún")) {
        lista.innerHTML = "";
    }

    let fecha = new Date().toLocaleString();

    let item = document.createElement("li");
    let texto = document.createElement("span");

    texto.textContent = tipo + " | " + actividad + " | " + fecha;

    // BOTÓN HECHO
    let btnHecho = document.createElement("button");
    btnHecho.textContent = "Hecho";

    btnHecho.onclick = function () {
        texto.style.textDecoration = "line-through";
        texto.style.opacity = "0.6";

        let confirmar = confirm("¿Deseas eliminar esta tarea?");
        if (confirmar) {
            lista.removeChild(item);
        }
    };

    // BOTÓN PENDIENTE
    let btnPendiente = document.createElement("button");
    btnPendiente.textContent = "Pendiente";

    btnPendiente.onclick = function () {
        texto.style.textDecoration = "none";
        texto.style.opacity = "1";
    };

    // BOTÓN ELIMINAR
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.onclick = function () {
        lista.removeChild(item);
    };

    item.appendChild(texto);
    item.appendChild(btnHecho);
    item.appendChild(btnPendiente);
    item.appendChild(btnEliminar);

    lista.appendChild(item);

    document.getElementById("actividad").value = "";

    console.log("Tarea agregada correctamente");
}