
// Función valida nota si es vacio o rango 0 a 10
function validarNota(valor) {

    if (isNaN(valor) || valor < 0 || valor > 10) {
      console.log("Valor no válido, el rango es de 0 a 10");
      return false;
    }else{
        return true;
    }
  }

// Función calculo del promedio
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Muestra Mensaje del promedio Si pasa o no el Alumno
function mostrarMensaje(nombre, promedio) {
    if (promedio >= 7) {
        console.log(`${nombre}, ¡felicidades! Has aprobado con un promedio de ${promedio.toFixed(2)}.`);
    } else {
        console.log(`${nombre}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(2)}.`);
    }
}

//Proceso del problema

function btncaclular(){
let nombreAlumno;
let nota1, nota2, nota3;
do {
    nombreAlumno = prompt("Ingrese el nombre del alumno:");
} while (!nombreAlumno || !(/^[a-zA-Z\s]+$/.test(nombreAlumno)));

do {
    nota1 =  parseFloat(prompt("Ingrese la primera nota (de 0 a 10):"));
} while (!validarNota(nota1));

do {
    nota2 =  parseFloat(prompt("Ingrese la segunda nota (de 0 a 10):"));
} while (!validarNota(nota2));

do {
    nota3 =  parseFloat(prompt("Ingrese la tercera nota (de 0 a 10):"));
}  while (!validarNota(nota3));

const promedioFinal = calcularPromedio(nota1, nota2, nota3);
mostrarMensaje(nombreAlumno, promedioFinal);

}