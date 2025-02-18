/*
      Se va a preguntar al usuario por el número de filas y columnas que
      se quiere que tenga el tablero de la sopa de letras. Un máximo de 15.
      Hay que controlar que lo que se introduzca sea un número y esté en ese
      rango. En caso contrario se vuelve a pedir el número de fila o columna
      hasta que el usuario lo introduzca correctamente
    */

//Pedimos al usuario el tamaño que tendrá la sopa de letra.
//Variable tipo array
var tablero = [];
//variable booleana y operador de asignacion
var numeroCorrectoColumnas = false;
var numeroCorrectoFilas = false;
//variable undefined
var columna;
var fila;

//Pedimos columnas y filas.
while (!numeroCorrectoColumnas) {
  //Inicializamos una variable con var
  //variable tipo numérica
  columna = parseInt(prompt("Cúantas columnas tendrá (entre 5 y 15)"));
  /* Utilizamos operadores lógicos AND(&&), NOT(!).
   * Operadores de comparacion Mayor o iugla >=  y menor o igual <=
   * Desigualdad estricta !==
  */
  if (!isNaN(columna) && columna !== null && columna >= 5 && columna <= 15) {
    numeroCorrectoColumnas = true;
    while (!numeroCorrectoFilas) {
      //Aquí inicializamos una variable con var
      fila = parseInt(prompt("Cúantas filas tendrá (entre 5 y 15)"));
      //Desigualdad abstracta (comparando solo el valor)
      if (!isNaN(fila) && fila != null && fila >= 5 && fila <= 15) {
        numeroCorrectoFilas = true;
      } else {
        alert("Debes introducir un número entre 5 y 15");
      }
    }
  } else {
    alert("Debes introducir un número entre 5 y 15");
  }
}

//llamo a la función inicializa_tablero
inicializa_tablero();

/*
      Se va a pedir al usuario el número de palabras a introducir 
      en el tablero. Hay que controlar lo mismo de antes además de 
      un máximo de 3 palabras. 
    */

//Pedimos ahora el número de palabras que tendrá
let cantidadPalabraCorrecta = false;
let cantidadPalabra;
while (!cantidadPalabraCorrecta) {
  cantidadPalabra = parseInt(prompt("Cúantas palabras desea introducir (entre 1 y 3)"));
  if (!isNaN(cantidadPalabra) && cantidadPalabra !== null && cantidadPalabra >= 1 && cantidadPalabra <= 3) {
    cantidadPalabraCorrecta = true;
  } else {
    alert("Debes introducir un número de palabras entre 1 y 3");
  }
}


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


     /*Este bucle recorrerá el nº de palabras que irá de 0 a 2.
Para cada palabra se le preguntará que palabra es, en qué columna, en que fila y la dirección (en este caso la implementada es hacia la derecha (de)).
*/
//Operador de asignacion ++;
for (let i = 0; i < cantidadPalabra; i++) {
  //variable tipo string
  let palabra = '--';
  //Expresión regular abecedario, solo se permite de la A-Z y de la a-z.
  const abecedario = /^[A-Z,a-z]+$/;
  //Mientras contenga caracter que no esté en la expresión regular (abecedario) el bucle se repite
  while (!abecedario.test(palabra)) {
    palabra = prompt("Introduce la palabra número: " + (i + 1));
    if (!abecedario.test(palabra)) {
      alert("Tienes que introducir una palabra válida");
    }
  }

  let filaInsertar = -1;
  //Operadores lógicos OR(||)
  while (filaInsertar < 1 || filaInsertar > fila) {
    filaInsertar = parseInt(prompt("¿En qué fila desea insertar la palabra?"));
    if (isNaN(filaInsertar)) {
      alert("Por favor, introduce un número válido");
      //Comparación menor que <
    } else if (filaInsertar < 0 || filaInsertar > fila) {
      alert("Por favor, introduce un número entre 1 y " + (fila) + ".");
    }
  }
  filaInsertar = filaInsertar - 1;

  let columnaInsertar = -1;
  while (columnaInsertar < 1 || columnaInsertar > columna) {
    columnaInsertar = parseInt(prompt("¿En qué columna desea insertar la palabra?"));
    if (isNaN(filaInsertar)) {
      alert("Por favor, introduce un número válido");
    } else if (columnaInsertar < 1 || columnaInsertar > columna) {
      alert("Por favor, introduce un número entre 1 y " + (columna) + ".");
    }
  }
  columnaInsertar = columnaInsertar -1;

  let direccion = '';
  while (direccion !== 'de' && direccion !== 'iz' && direccion !== 'ar' && direccion !== 'ab') {
    direccion = prompt("Introduce la dirección (de, iz, ar, ab):");
    if (direccion !== 'de' && direccion !== 'iz' && direccion !== 'ar' && direccion !== 'ab') {
      alert("Dirección no válida, por favor introduce 'de', 'iz', 'ar' o 'ab'.");
    }
  }


  //Llamo a la funcion esta_en_rango
  //uso de igualdad estricta === (compara valor y tipo)
  if(esta_en_rango(palabra, filaInsertar, columnaInsertar, direccion) === true){
    //igualdad abstracta == (compara solo el valor.)
    if(comprueba_ocupacion(palabra, filaInsertar, columnaInsertar, direccion) == true){
      insertarPalabra(palabra, filaInsertar, columnaInsertar, direccion);
    }else {
      alert("La palabra no se puede insertar porque pisa con otra, pasamos a la siguiente");
    }
  } else{
    alert("La palabra no cabe en el hueco que ha solicitado");
  }
}


/* Se llamará a las funciones rellena_tablero y imprime_tablero*/
rellena_tablero();
imprime_tablero();
/*
  Crea un tablero con las filas y columnas que ha indicado
  el usuario y cada posición tiene el carácter "?"
*/



function inicializa_tablero() {
  // Crear el tablero con las filas y columnas indicadas
  for (let i = 0; i < fila; i++) {
    //Aqui creo una variable let para que solo sea modificada aquí dentro.
    let fila = [];
    for (let j = 0; j < columna; j++) {
      fila.push('?');
    }
    tablero.push(fila);
  }

  return tablero;
}

/*
      Esta función imprime el tablero de la sopa de letras 
      con todas las palabras insertadas y el resto con caracteres
      aleatorios.
    */
function imprime_tablero() {
  // Seleccionamos el contenedor del tablero en el HTML, por ejemplo, un div con id "tablero"
  let tableroHTML = document.getElementById('tablero');

  // Inicializamos una variable para generar el HTML de la tabla
  let html = '<table border="1" cellpadding="5">';

  // Recorremos el tablero y generamos filas y columnas en HTML
  for (let i = 0; i < tablero.length; i++) {
    //operadores de composicion
    html += '<tr>'; // Empieza una nueva fila
    for (let j = 0; j < tablero[i].length; j++) {
      html += '<td>' + tablero[i][j] + '</td>'; // Añade una celda con el valor del tablero
    }
    html += '</tr>';
  }

  html += '</table>';

  // Insertamos el HTML generado en el contenedor
  tableroHTML.innerHTML = html;
}

/* 
      Esta función recibe una palabra, la fila y columna donde iría la primera letra
     de esa palabra, así como la dirección en la que se insertaría.
     Trata de comprobar si dicha palabra cabe en el tablero. En caso de caber
     devuelve true, sino devuelve false. 
    */

function esta_en_rango(pal, fil, col, dir) {
  //Creo constantes porque no es necesario sobreescribir la variable
  const numFilas = tablero.length;
  const numColumnas = tablero[0].length;
  const longitudPalabra = pal.length;
  let direccionValida = false;

  while (!direccionValida) {
    switch (dir) {
      case 'de':
        //operadores aritméticos
        if (col + longitudPalabra > numColumnas) {
          return false;
        }
        break;
      //Se implementaran más adelante.
      case 'iz':
        break;

      case 'ar':
        break;

      case 'ab':
        break;

      default:
        alert("Dirección no válida, pruebe de nuevo");
    }

    return true;
  }

}

/*
     Esta función recibe una palabra, la fila y columna donde iría la primera letra
     de esa palabra, así como la dirección en la que se insertaría.
     Trata de comprobar si las posiciones que va a ocupar la nueva
     palabra están o no libres. En caso de estar libres todas devuelve true. En
     el caso de que solo una esté ocupada devuelve false
    */

function comprueba_ocupacion(palabra, fila, columna, dir) {
  const longitudPalabra = palabra.length;
  let direccionValida = false;
  while (!direccionValida) {
    if (dir === 'de') {
      //operadores de incremento
      for (let i = 0; i < longitudPalabra; i++) {
        // Comprobar si la posición está ocupada
        if (tablero[fila][columna + i] !== '?') {
          return false; // Hay un carácter ocupando el espacio
        }
      }
      direccionValida = true;
    } else if (dir === 'iz') {

    } else if (dir === 'ar') {

    } else if (dir === 'ab') {

    } else {
      alert("Dirección no válida, pruebe de nuevo");
    }

    return true;
  }
}

/*esta función va a recorrer todo el tablero de la 
     sopa de letras de modo que donde encuentre el caracter "?"
     lo va a sustituir por una letra aleatoria, y donde haya otro
     carácter lo va a dejar sin modificar
    */

/* Esta función está realizada con un bucle do...while*/
function rellena_tablero() {
  let i = 0;
  do {
    let j = 0;
    do {
      if (tablero[i][j] === '?') {
        tablero[i][j] = genera_letra();
      }
      j++;
    } while (j < tablero[i].length);
    i++;
  } while (i < tablero.length);
}

//devuelve una letra de la a a la z de forma aleatoria
function genera_letra() {
  //variable constante
  const letras = 'abcdefghijklmnopqrstuvwxyz'; // Todas las letras del alfabeto
  const indice = Math.floor(Math.random() * letras.length); // Genera un índice aleatorio
  return letras[indice]; // Devuelve la letra correspondiente al índice
}

//Función que inserta la palabra en el array
function insertarPalabra(palabra, fila, columna, direccion) {
  const longitudPalabra = palabra.length;
  if (direccion === 'de') {
      for (let i = 0; i < longitudPalabra; i++) {
          let letra = palabra.charAt(i);
          tablero[fila][columna + i] = letra;
      }
  } else if (direccion === 'iz') {
      // Lógica para insertar hacia la izquierda
  } else if (direccion === 'ar') {
      // Lógica para insertar hacia arriba
  } else if (direccion === 'ab') {
      // Lógica para insertar hacia abajo
  } else {
      alert("Dirección no válida, pruebe de nuevo");
  }
}


/* AQUI MOSTRAREMOS EL NOMBRE DE TODOS LOS OPERADORES QUE SE HAN UTILIZADO
Y DONDE PARA QUE SEA MAS FACIL SU LOCALIZACION, ASÍ COMO LOS TIPOS DE VARIABLES:

- Tipos de Variables
1.Variables numéricas:

columna

2.Variables booleanas:

numeroCorrectoColumnas

3.Variables de tipo array:

tablero

4.Variables de tipo string:

palabra

5.Variables indefinidas:

columna

6.Constantes:

abecedario

-Operadores

1.Operadores de Asignación:

=

2.Operadores Aritméticos:

+ por ejemplo, en col + longitudPalabra.

3.Operadores de Comparación:

==, ===, !=, !==, >=, <=

4.Operadores Lógicos:

&& (AND)
|| (OR)
! (NOT)

5.Operadores de Incremento:

++

6.Operadores de Composición:
+=
*/




