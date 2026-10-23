
const escuelas = [
    {
        nombre: "Escuela Horizonte",
        acciones: 128,
        puntos: 1840,
        icono: "🌞"
    },
    {
        nombre: "Secundaria Los Aromos",
        acciones: 104,
        puntos: 1560,
        icono: "🍂"
    },
    {
        nombre: "Instituto Río Claro",
        acciones: 91,
        puntos: 1325,
        icono: "🌊"
    },
    {
        nombre: "Escuela del Parque",
        acciones: 76,
        puntos: 1090,
        icono: "🌳"
    }
];

const rankingLista = document.getElementById("ranking-lista");

escuelas.forEach((escuela, indice) => {
    const fila = document.createElement("div");
    fila.classList.add("fila");

    fila.innerHTML = `
        <span class="puesto">${indice + 1}°</span>
        <span class="nombre-escuela">${escuela.icono} ${escuela.nombre}</span>
        <span>${escuela.acciones}</span>
        <span class="puntos">${escuela.puntos.toLocaleString("es-AR")}</span>
    `;

    rankingLista.appendChild(fila);
});

// Racha de ingreso de demostración
let diasDeRacha = 0;

const botonIngreso = document.getElementById("ingreso");
const racha = document.getElementById("racha");

botonIngreso.addEventListener("click", function () {
    diasDeRacha++;

    racha.textContent =
        diasDeRacha + (diasDeRacha === 1 ? " día" : " días");

    botonIngreso.textContent = "¡Ingreso marcado! ✓";
    botonIngreso.disabled = true;

    setTimeout(() => {
        botonIngreso.disabled = false;
        botonIngreso.textContent = "Marcar mi ingreso";
    }, 1500);
});

// Formulario para registrar acciones
const formulario = document.getElementById("form-accion");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const escuela = document.getElementById("escuela").value;
    const accion = document.getElementById("accion").value;
    const descripcion = document.getElementById("descripcion").value;
    const foto = document.getElementById("foto").files[0];

    if (escuela === "" || accion === "") {
        mensaje.textContent = "Elegí tu escuela y una acción.";
        return;
    }

    const puntos = Number(accion);

    mensaje.textContent =
        "¡Acción registrada en esta demostración! Sumaste " +
        puntos + " puntos para " + escuela + ".";

    console.log("Escuela:", escuela);
    console.log("Puntos:", puntos);
    console.log("Descripción:", descripcion);

    if (foto) {
        console.log("Foto seleccionada:", foto.name);
        mensaje.textContent +=
            " La foto se seleccionó, pero todavía no se sube a un servidor.";
    }

    formulario.reset();
});
