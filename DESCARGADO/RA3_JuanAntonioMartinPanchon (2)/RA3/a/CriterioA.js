/* Date Crea una función que reciba una fecha de nacimiento y calcule la edad en años. Solicita al usuario
que ingrese su fecha de nacimiento en el formato YYYY-MM-DD. Realizar las comprobaciones
necesarias */
function convertirDiferenciaEnAños() {
  //1000 milisegundos * 60 segundos * 60 minutos * 24 horas * 365.25 días
  return 1000 * 60 * 60 * 24 * 365.25;
}



function calcularEdad(fechaNacimiento) {
  fechaNacimiento = new Date(fechaNacimiento);
  let fechaActual = new Date();
  let edad = Math.floor(Math.abs(fechaActual.getTime() - fechaNacimiento.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
  document.getElementById('resultadoEdad').innerHTML = "Tu edad es " + edad + " años";
}


/*Calcular la diferencia en días entre dos fechas. */

function calcularDias(fecha1, fecha2) {
  fecha1 = new Date(fecha1);
  fecha2 = new Date(fecha2);
  let diferencia = Math.abs(fecha1 - fecha2) / (1000 * 60 * 60 * 24);
  document.getElementById('diferencia').innerHTML = "La diferencia entre ambas fechas es de " + diferencia + " dias"
}

/* Math Realizar una función con Math en la que se trabajen los distintos tipos de redondeos. */
function redondear(numero, tipoRedondeo) {
  const radios = document.getElementsByName('redondeo');

  for (const radio of radios) {
    if (radio.checked) {
      tipoRedondeo = radio.value;
      break;
    }
  }
  switch (tipoRedondeo) {
    case 'round':
      document.getElementById('resultadoRedondeo').innerHTML =
        "El redondeo round redondea al entero más cercano siendo el resultado " + Math.round(numero);
      break;
    case 'floor':
      document.getElementById('resultadoRedondeo').innerHTML =
        "El redondeo floor redondea Redondea hacia abajo siendo el resultado " + Math.floor(numero);
      break;
    case 'ceil':
      document.getElementById('resultadoRedondeo').innerHTML =
        "El redondeo ceil redondea hacia arriba siendo el resultado " + Math.ceil(numero);
      break;
    case 'trunc':
      document.getElementById('resultadoRedondeo').innerHTML =
        "El redondeo trunc elimina la parte decimal siendo el resultado " + Math.trunc(numero);
      break;
    default:
      document.getElementById('resultadoRedondeo').innerHTML =
        "Debe introducir un valor válido de entre los que se le indica arriba";
  }
}

/*
   Number Realizar una función que reciba una cadena como parámetro y la convierta a número usando el objeto 
Number. Realizar una operación matemática cualquiera con dicho número y mostrar si el resultado es 
finito o infinito.
*/

function convertirStringEnNumero(cadena) {
  let numero = Number(cadena);
  if (isNaN(numero)) {
    document.getElementById('resultado').innerHTML = "La cadena introducida no es un número";
  } else {
    numero = Math.pow(numero, 50);
    if (isFinite(numero)) {
      document.getElementById('resultado').innerHTML = "El resultado un numero finito " + numero;
    } else {
      document.getElementById('resultado').innerHTML = "El resultado un numero infinito ";
    }
  }
}


/*
String
Crea una función llamada procesarTexto que reciba una cadena de texto y realice las siguientes
operaciones utilizando distintos métodos del objeto String:
1. Convertir la cadena a minúsculas.
2. Eliminar espacios en blanco al principio y al final de la cadena.
3. Reemplazar todas las ocurrencias de la palabra "javascript" por "JavaScript".
4. Extraer los primeros 10 caracteres de la cadena.
5. Obtener la posición de la primera ocurrencia de la letra "a".
6. Dividir la cadena en un arreglo de palabras.
*/

function procesarTexto(cadena) {
  let minusculas = cadena.toLowerCase();
  document.getElementById('minusculas').innerText = "Texto en minúsculas: " + minusculas;
  let espaciosEliminados = cadena.trim();
  document.getElementById('quitarEspacios').innerText = "Texto sin espacios al principio ni al final: " + espaciosEliminados;
  let cambiarLetra = cadena.replace("javascript", "Javascript");
  document.getElementById('cambiarLetra').innerText = "Cambiando javascript por Javascript: " + cambiarLetra;
  let primeros10 = cadena.slice(0, 10)
  document.getElementById('primerosCaracteres').innerText = "Cogemos solo los 10 primeros caracteres: " + primeros10;
  let posicionA = cadena.indexOf("a");
  if (cadena.indexOf("a") == -1){
    document.getElementById('posicionA').innerText = "No aparece la letra a";
  }else{
    document.getElementById('posicionA').innerText = "El numero donde aparece a por primera vez es: " + posicionA;
  }
  
  let palabras = cadena.split(" ");
  document.getElementById('dividirCadena').innerText = "Diferenciamos las palabras con una coma   " + palabras;
}

/*
Crea una función llamada procesarDatos que reciba un objeto con una propiedad llamada nombre. La
función debe intentar acceder a la propiedad nombre del objeto y convertirla a mayúsculas. Si el objeto
no tiene la propiedad nombre, la función debe lanzar un ReferenceError. Si el valor de nombre no es
un tipo de dato string, debe lanzar un TypeError.
La función principal debe llamar a procesarDatos y manejar los errores utilizando try...catch,
mostrando mensajes personalizados para cada tipo de error.
Salida
procesarDatos({}) // "ReferenceError: La propiedad 'nombre' no existe"
procesarDatos({ nombre: 123 }) // "TypeError: El valor de 'nombre' debe ser una cadena"
procesarDatos({ nombre: "Juan" }) // "JUAN"
*/

function procesarDatos(obj) {
  try {
      // Verificamos si el objeto tiene la propiedad 'nombre'
      if (!obj.hasOwnProperty('nombre')) {
          throw new ReferenceError("La propiedad 'nombre' no existe");
      }

      // Verificamos si el valor de 'nombre' es un string
      if (typeof obj.nombre !== 'string') {
          throw new TypeError("El valor de 'nombre' debe ser una cadena");
      }

      // Si todo está bien, devolvemos el valor de 'nombre' en mayúsculas
      return obj.nombre.toUpperCase();
  } catch (error) {
      // Si ocurre otro error, lo lanzamos de nuevo
      throw error;
  }
}

// Función principal para manejar los errores
function ejecutar() {
  try {
      // Llamamos a la función procesarDatos y pasamos un objeto vacío
      document.getElementById('ReferenceError').innerText = procesarDatos({}); // ReferenceError: La propiedad 'nombre' no existe
  } catch (error) {
      document.getElementById('ReferenceError').innerText = `${error.name}: ${error.message}`;
  }

  try {
    document.getElementById('TypeError').innerText = procesarDatos({ nombre: 123 }); // TypeError: El valor de 'nombre' debe ser una cadena
  } catch (error) {
      document.getElementById('TypeError').innerText = `${error.name}: ${error.message}`;
  }

  try {
    document.getElementById('error').innerText = procesarDatos({ nombre: "Juan" }); // TypeError: El valor de 'nombre' debe ser una cadena
  } catch (error) {
    document.getElementById('error').innerText = procesarDatos(`${error.name}: ${error.message}`);
  }
}


/*
Validación de Rango con RangeError
Crea una función llamada calcularRaizCuadrada que reciba un número como parámetro. La función
debe lanzar un RangeError si el número es negativo, indicando que no se pueden calcular raíces
cuadradas de números negativos. Si el número es válido, debe retornar la raíz cuadrada del número.
Implementa un bloque try...catch para llamar a la función y manejar el posible RangeError,
mostrando un mensaje adecuado en caso de que ocurra el error.
Salida
calcularRaizCuadrada(25) // "La raíz cuadrada de 25 es 5"
calcularRaizCuadrada(-5) // "RangeError: No se puede calcular la raíz cuadrada de un número negativo"
*/

function calcularRaizCuadrada(numero) {
  try {
    if (numero < 0) {
      throw new RangeError("No se puede calcular la raíz cuadrada de un número negativo");
    }
    document.getElementById('resultadoRaiz').innerText = "La raíz cuadrada de " + numero + " es " + Math.sqrt(numero);
  } catch (error) {
    document.getElementById('resultadoRaiz').innerText = `${error.name}: ${error.message}`;
  }
}