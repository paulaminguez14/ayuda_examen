// Selección del canvas y configuración del contexto 2D
// Estas variables manejan el estado del juego, como la puntuación, el temporizador y si el juego está pausado o no.
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tiempo = document.getElementById("contenido");
const botoninicio = document.getElementById("inicio");
const botonpausa = document.getElementById("pausa");
var pausado = true;
let score = 0;
let timer = null;
let timeLeft = 20; // Tiempo inicial en segundos

//Mostrar mensaje al iniciar el juego
window.onload = () => {
  alert("Se va iniciar el juego");
};

/*
Hacer que el cuadrado se genere en una posición aleatoria y
*/
let square = {
  x: Math.floor(Math.random() * (canvas.width - 40)),
  y: Math.floor(Math.random() * (canvas.height - 40)),
  size: 40, // Tamaño del cuadrado
  speed: 5, // Velocidad de movimiento
  visible: true,
};

/* Crear el cuadrado 2 en una posición aleatoria del canvas*/
//Representa el cuadrado que el jugador debe capturar
let square2 = {
  x: Math.floor(Math.random() * (canvas.width - 40)),
  y: Math.floor(Math.random() * (canvas.height - 40)),
  size: 40,
  visible: true,
};

/* 
Asociar los eventos a los botones inicio y pausa
*/
// Al hacer clic en el botón de inicio, el juego comienza. Se reinicia la puntuación y se reinicia el temporizador.
botoninicio.addEventListener("click", () => {
  pausado = false;
  score = 0;
  square2.visible = true;
  agregaComentario("¡Juego iniciado!");
  startTimer();
  drawSquare();
});
// Al hacer clic en el botón de pausa, el estado del juego cambia entre pausado y reanudado.
botonpausa.addEventListener("click", () => {
  pausado = !pausado;
  // Actualiza el texto del botón.
  botonpausa.textContent = pausado ? "Reanudar Juego" : "Pausar Juego";
  agregaComentario(pausado ? "Juego pausado" : "Juego reanudado");
});

/* 
 Manejadores de los botones inicio y pausa
 Al hacer click en iniciar estamos en la situación
 de inicio del juego con score a 0, tiempo a 20 segundos etc

 Al hacer click en pausar , el tiempos se para y el contenido del
 botón pasa a ser "Reanudar Juego". Al hacer click de nuevo el 
 tiempo continúa y el texto vuelve a ser "Pausar Juego"
*/

// Función para dibujar el cuadrado
function drawSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

  // Dibuja el primer cuadrado (azul)
  ctx.fillStyle = "#007bff"; // Color azul
  ctx.fillRect(square.x, square.y, square.size, square.size);

  // Dibuja el segundo cuadrado (verde)
  if (square2.visible) {
    ctx.fillStyle = "#28a745"; // Color verde
    ctx.fillRect(square2.x, square2.y, square2.size, square2.size);
  }

  /* También hay que tener en cuenta que cuando el cuadrado azul
  choque con el verde, se muestra el mensaje:
  "Cuadrado capturado. Sumaste 100 puntos"
  se suman los 100 puntos 
  y el cuadrado verde desaparece
  */

    // Aquí llamamos a la función detectCollision para verificar si los cuadrados se tocan.
  detectCollision();
}
/* Si el cuadrado azul toca el cuadrado verde, 
el jugador gana puntos y el cuadrado verde desaparece. */
function detectCollision() {
    if (
      square.visible &&
      square2.visible &&
      square.x < square2.x + square2.size &&
      square.x + square.size > square2.x &&
      square.y < square2.y + square2.size &&
      square.y + square.size > square2.y
    ) {
      score += 100;
      square2.visible = false; // Ocultar el cuadro verde
      drawSquare(); // Redibujar el canvas para reflejar el cambio
    }
  }
  

function agregaComentario(comentario) {
  /*Esta función es para hacerla con el DOM
  cuaando corresponda */
  const li = document.createElement("li");
  li.textContent = comentario;
  document.getElementById("commentList").appendChild(li);
   //Si hay más de 5 mensajes, elimina el más antiguo
  while (commentList.children.length > 5) {
    commentList.removeChild(commentList.firstChild);
  }
}

/* 
 Realizar aquí todo lo relacionado
 con los temporizadores y cuenta atrás
 En todo momento va a aparecer el mensaje
 "Tiempo restante: X segundos"
 Cuando el tiempo restante sea 0 entonces se lanzará 
 el mensaje de "Tiempo agotado! Fin del juego" y el
 número de puntos que consiguió el usuario 
*/
function startTimer() {
  if (timer) clearInterval(timer);
  timeLeft = 20;
  tiempo.textContent = `Tiempo restante: ${timeLeft} segundos`;
  timer = setInterval(() => {
    if (!pausado) {
      timeLeft--;
      tiempo.textContent = `Tiempo restante: ${timeLeft} segundos`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        pausado = true;
        agregaComentario(`¡Tiempo agotado! Fin del juego. Puntuación: ${score} puntos`);
      }
    }
  }, 1000);
}

/* Función para mover el cuadrado según la dirección*/
// Dependiendo de la tecla presionada, mueve el cuadrado azul en una dirección específica.
function moveSquare(direccion) {
  if (direccion === "ArrowUp") square.y = Math.max(0, square.y - square.speed);
  if (direccion === "ArrowDown") square.y = Math.min(canvas.height - square.size, square.y + square.speed);
  if (direccion === "ArrowLeft") square.x = Math.max(0, square.x - square.speed);
  if (direccion === "ArrowRight") square.x = Math.min(canvas.width - square.size, square.x + square.speed);
  drawSquare();
}

/* Evento: Raton para ganar puntos
   Cada vez que se hace el click de ratón se 
   recoge el evento y se suma un número aleatorio de
   puntos entre 1 y 10. Se recoge el mensaje:
   "Has hecho click y ganado X puntos. Puntuación X puntos"
*/
canvas.addEventListener("click", () => {
  /*Cada vez que hacemos clic en el canvas, se genera un número aleatorio de puntos entre 1 y 10.
  Luego, estos puntos se suman al puntaje actual. Es una forma sencilla de ganar puntos rápidamente. */  
  const points = Math.floor(Math.random() * 10) + 1;
  score += points;
  agregaComentario(`Has hecho click y ganado ${points} puntos. Puntuación: ${score} puntos`);
});

/* Evento: Detección del movimiento del ratón
   Cada vez que se mueve el ratón:
    Se recoge el mensaje:
    "Movimiento del ratón detectado. Sus coordenadas son X e Y"
*/
canvas.addEventListener("mousemove", (event) => {
  agregaComentario(`Movimiento del ratón detectado. Sus coordenadas son ${event.offsetX} e ${event.offsetY}`);
});

/* Evento clic derecho
    Se recoge el mensaje "Menú contextual deshabilitado"
*/
canvas.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  agregaComentario("Menú contextual deshabilitado");
});

/* Evento: Doble clic para turbo-puntos
    Se recoge el mensaje: 
    "Doble clic detectado. ¡Turbo-puntos añadidos! Puntuación: X"
    y se suma a los puntos. 
*/
canvas.addEventListener("dblclick", () => {
  const turboPoints = 50;
  score += turboPoints;
  agregaComentario(`Doble clic detectado. ¡Turbo-puntos añadidos! Puntuación: ${score}`);
});

/*Evento para capturar las teclas del teclado
  Se capturan las flechas en las distintas direcciones y se llama 
  a la función moveSquare

  Si se pulsa la tecla Enter se muestra una ventana con ayuda sobre
  las instrucciones de los eventos a usar en el juego

  Si se pulsa otra tecla se indica que esa tecla no está habilitada

  Se recogen todos los mensajes
*/
document.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    moveSquare(event.key);
    detectCollision();
  } else if (event.key === "Enter") {
    alert("Instrucciones: Usa las flechas para mover el cuadrado y los eventos del ratón para ganar puntos.");
  } else {
    agregaComentario(`La tecla '${event.key}' no está habilitada.`);
  }
});

// Dibuja el cuadrado inicialmente
drawSquare();
startTimer();
