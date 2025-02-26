/*
  Se va a preguntar al usuario por el número de filas y columnas que
  se quiere que tenga el tablero de la sopa de letras. Un máximo de 15.
  Hay que controlar que lo que se introduzca sea un número y esté en ese
  rango. En caso contrario se vuelve a pedir el número de fila o columna
  hasta que el usuario lo introduzca correctamente
    */

// Pedimos al usuario el tamaño que tendrá la sopa de letra.
// Variable tipo array
var tablero = [];

// Variable booleana y operador de asignacion
var numeroCorrectoColumnas = false;

// Variable undefined
var columna;

// Pedimos columnas y filas.
do {
  // Inicializamos una variable con var
  var filas = prompt("Introduce el número de filas (máximo 15):");
  // Variable tipo numérica
  filas = parseInt(filas);

  /* Utilizamos operadores lógicos AND(&&), NOT(!).
   * Operadores de comparacion Mayor o igual >= y menor o igual <=
   * Desigualdad estricta !==
  */
  if (!isNaN(filas) && filas >= 1 && filas <= 15) {
    numeroCorrectoColumnas = true;
  } else {
    alert("Número de filas incorrecto. Debe ser un número entre 1 y 15.");
  }
} while (!numeroCorrectoColumnas);

numeroCorrectoColumnas = false;

do {
  // Aquí inicializamos una variable con var
  var columnas = prompt("Introduce el número de columnas (máximo 15):");
  columnas = parseInt(columnas);

  // Desigualdad abstracta (comparando solo el valor)
  if (!isNaN(columnas) && columnas >= 1 && columnas <= 15) {
    numeroCorrectoColumnas = true;
  } else {
    alert("Número de columnas incorrecto. Debe ser un número entre 1 y 15.");
  }
} while (!numeroCorrectoColumnas);

// Llamo a la función inicializa_tablero
inicializa_tablero(filas, columnas);

/*
  Se va a pedir al usuario el número de palabras a introducir 
  en el tablero. Hay que controlar lo mismo de antes además de 
  un máximo de 3 palabras. 
    */

// Pedimos ahora el número de palabras que tendrá
var numeroPalabras = 0;
do {
  numeroPalabras = prompt("Introduce el número de palabras (máximo 3):");
  numeroPalabras = parseInt(numeroPalabras);

  if (isNaN(numeroPalabras) || numeroPalabras < 1 || numeroPalabras > 3) {
    alert("Número de palabras incorrecto. Debe ser un número entre 1 y 3.");
  }
} while (isNaN(numeroPalabras) || numeroPalabras < 1 || numeroPalabras > 3);

/*
     Voy a ir pidiendo cada una de las palabras al usuario.
     Introduzca la palabra número...
     Introduzca la fila donde comenzaría
     Introduzca la columna donde comenzaría
     Introduzca la dirección de la palabra (arriba(ar), izquierda(iz), abajo(ab), derecha(de))
     TENGO QUE CONTROLAR QUE TODO LO ANTERIOR SE INTRODUCEN LOS VALORES CORRECTOS
   
     Una vez que toda esa información es correcta, llamo a la función
     esta_en_rango

     Si la palabra esta_en_rango entonces llamo a la función comprueba_ocupacion
     y en caso que haya hueco la palabra quedará insertada y se continuará del mismo
     modo con la siguiente palabra.

     En caso de que no quepa en el tablero o las posiciones ya estén ocupadas
     se devolverán los mensajes correspondientes y se pasará a la siguiente
     palabra (más adelante se hará alguna modificación respecto a esto)
     */

for (var i = 0; i < numeroPalabras; i++) {
  // Variable tipo string
  var palabra = "";
  var filaInicio, columnaInicio, direccion;

  // Expresión regular abecedario, solo se permite de la A-Z y de la a-z.
  var abecedario = /^[A-Za-z]+$/;

  // Mientras contenga caracter que no esté en la expresión regular (abecedario) el bucle se repite
  do {
    palabra = prompt("Introduce la palabra número " + (i + 1) + ":");
  } while (!abecedario.test(palabra));

  do {
    filaInicio = prompt("Introduce la fila donde comenzaría la palabra:");
    filaInicio = parseInt(filaInicio) -1;
  } while (isNaN(filaInicio) || filaInicio < 0 || filaInicio >= filas);

  do {
    columnaInicio = prompt("Introduce la columna donde comenzaría la palabra:");
    columnaInicio = parseInt(columnaInicio) -1;
  } while (isNaN(columnaInicio) || columnaInicio < 0 || columnaInicio >= columnas);

  do {
    direccion = prompt("Introduce la dirección de la palabra (arriba(ar), izquierda(iz), abajo(ab), derecha(de)):");
  } while (direccion !== "ar" && direccion !== "iz" && direccion !== "ab" && direccion !== "de");

  if (esta_en_rango(palabra, filaInicio, columnaInicio, direccion)) {
    if (comprueba_ocupacion(palabra, filaInicio, columnaInicio, direccion)) {
  inserta_palabra(palabra, filaInicio, columnaInicio, direccion);
    } else {
  alert("La palabra no cabe en el tablero o las posiciones ya están ocupadas.");
    }
  } else {
    alert("La palabra no cabe en el tablero.");
  }
}

/* Se llamará a las funciones rellena_tablero y imprime_tablero*/
rellena_tablero();
imprime_tablero();

/*
  Crea un tablero con las filas y columnas que ha indicado
  el usuario y cada posición tiene el carácter "?"
*/
function inicializa_tablero(filas, columnas) {
  for (var i = 0; i < filas; i++) {
    tablero[i] = [];
    for (var j = 0; j < columnas; j++) {
  tablero[i][j] = "?";
    }
  }
}

/*
  Esta función imprime el tablero de la sopa de letras 
  con todas las palabras insertadas y el resto con caracteres
  aleatorios.
    */
function imprime_tablero() {
  var resultado = "";
  for (var i = 0; i < tablero.length; i++) {
    resultado += tablero[i].join(" ") + "\n";
  }
  document.body.innerHTML += "<pre>" + resultado + "</pre>";
}

/* 
  Esta función recibe una palabra, la fila y columna donde iría la primera letra
     de esa palabra, así como la dirección en la que se insertaría.
     Trata de comprobar si dicha palabra cabe en el tablero. En caso de caber
     devuelve true, sino devuelve false. 
    */
function esta_en_rango(palabra, fila, columna, direccion) {
  const longitudPalabra = palabra.length;

  // Operadores aritméticos
  if (direccion === "de" && columna + longitudPalabra <= columnas) {
    return true;
  } else if (direccion === "ab" && fila + longitudPalabra <= filas) {
    return true;
  } else if (direccion === "iz" && columna - longitudPalabra >= -1) {
    return true;
  } else if (direccion === "ar" && fila - longitudPalabra >= -1) {
    return true;
  }
  return false;
}

/*
     Esta función recibe una palabra, la fila y columna donde iría la primera letra
     de esa palabra, así como la dirección en la que se insertaría.
     Trata de comprobar si las posiciones que va a ocupar la nueva
     palabra están o no libres. En caso de estar libres todas devuelve true. En
     el caso de que solo una esté ocupada devuelve false
    */
function comprueba_ocupacion(palabra, fila, columna, direccion) {
  for (var i = 0; i < palabra.length; i++) {
    // Comprobar si la posición está ocupada
    if (direccion === "de" && tablero[fila][columna + i] !== "?") {
  return false;
    } else if (direccion === "ab" && tablero[fila + i][columna] !== "?") {
  return false;
    } else if (direccion === "iz" && tablero[fila][columna - i] !== "?") {
  return false;
    } else if (direccion === "ar" && tablero[fila - i][columna] !== "?") {
  return false;
    }
  }
  return true;
}

/*esta función va a recorrer todo el tablero de la 
     sopa de letras de modo que donde encuentre el caracter "?"
     lo va a sustituir por una letra aleatoria, y donde haya otro
     carácter lo va a dejar sin modificar
    */
function rellena_tablero() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < filas; i++) {
    for (var j = 0; j < columnas; j++) {
  if (tablero[i][j] === "?") {
    tablero[i][j] = letras.charAt(Math.floor(Math.random() * letras.length));
  }
    }
  }
}

/* Esta función está realizada con un bucle do...while*/
// Variable constante
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Función que inserta la palabra en el array
function inserta_palabra(palabra, fila, columna, direccion) {
  for (var i = 0; i < palabra.length; i++) {
    if (direccion === "de") {
  tablero[fila][columna + i] = palabra.charAt(i);
    } else if (direccion === "ab") {
  tablero[fila + i][columna] = palabra.charAt(i);
    } else if (direccion === "iz") {
  tablero[fila][columna - i] = palabra.charAt(i);
    } else if (direccion === "ar") {
  tablero[fila - i][columna] = palabra.charAt(i);
    }
  }
}

/* AQUI MOSTRAREMOS EL NOMBRE DE TODOS LOS OPERADORES QUE SE HAN UTILIZ*/