"use strict";
let nombre = "Cristian";
nombre = "Buitrago";
console.log(nombre);

let numero = 23;
console.log(numero);

const e1 = {
    fistName: "Carlos",
    lastName: "Rodrigez",
    age: 34,
};

const e2 = {
    fistName: "Leo",
    lastName: "Messi",
};

// función para mostrar info estudiante 
// versión declarativa
const mostrarEstudiante = (estudiante) => {
    const { fistName, lastName } = estudiante;
    return `Nombre de estudiante: ${fistName} 
           apellido: ${lastName}`;
};
console.log(mostrarEstudiante(e1));

// ARREGLOS
let estudiantes = [];

// recorrer el arreglo de estudiantes
// imprimiendo nombre y apellido 
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};

agregarEstudiante({
    fistName: "Carlos",
    lastName: "Ortega",
    age: 32
});

agregarEstudiante({
    fistName: "Paolo",
    lastName: "Maldini",
    age: 22
});

agregarEstudiante({
    fistName: "Lalo",
    lastName: "Garza",
    age: 18
});

console.log(estudiantes);

// Método para buscar por nombre y actualizar el apellido - EVIDENCIA
const actualizarApellido = (fistName, newLastName) => {
    const estudiante = estudiantes.find(e => e.fistName === fistName);
    if (estudiante) {
        estudiante.lastName = newLastName;
    } else {
        console.log(`Estudiante con nombre ${fistName} no encontrado.`);
    }
};

actualizarApellido("Carlos", "Mecanico");
actualizarApellido("Paolo", "balonDeOro");
actualizarApellido("Lalo", "casemiro");
console.log(estudiantes);
