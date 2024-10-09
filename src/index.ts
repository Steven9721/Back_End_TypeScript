let nombre: string = "Cristian";
nombre = "Buitrago";
console.log(nombre)

let numero: number = 23;
console.log(numero);

type Estudiante = {
    fistName: string; 
    lastName: string;
    age?: number | string;
}

const e1 : Estudiante = {
    fistName : "Juan",
    lastName : "Rodrigez",
    age : 34,
}

const e2 : Estudiante = {
    fistName : "Steven",
    lastName : "Peralta"
}

// función para mostrar info estudiante 
const mostrarEstudiante = (estudiante: Estudiante): string => {
    const { fistName, lastName } = estudiante;
    return `Nombre de estudiante: ${fistName} 
           apellido: ${lastName}`;
}

console.log(mostrarEstudiante(e1));

// ARREGLOS
let estudiantes: Estudiante[] = [];

// Función para agregar estudiantes
const agregarEstudiante = (estudiante : Estudiante) => {
    estudiantes.push(estudiante);
}

agregarEstudiante({
    fistName: "Carlos",
    lastName: "Rodallega",
    age: 32
});

agregarEstudiante({
    fistName: "Sean",
    lastName: "Lopez",
    age: 22
});

agregarEstudiante({
    fistName: "Lalo",
    lastName: "Garza",
    age: 18
});

console.log(estudiantes);

// Método para buscar por nombre y actualizar el apellido -EVIDENCIA
const actualizarApellido = (fistName: string, newLastName: string): void => {
    const estudiante = estudiantes.find(e => e.fistName === fistName);
    if (estudiante) {
        estudiante.lastName = newLastName;
    } else {
        console.log(`Estudiante con nombre ${fistName} no encontrado.`);
    }
};

actualizarApellido("Carlos", "Rodriguez");
console.log(estudiantes);
