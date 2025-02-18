/*
Indique como puedo saber el idioma del navegador y si las cookies están habilitadas. ¿Hay algún
modo de obtener una pista sobre el sistema operativo en el que se ejecuta el navegador?
*/
function idiomaYCookies(){
	var idioma = navigator.language;
	var cookies = navigator.cookieEnabled;
	var os = navigator.userAgent;
	document.getElementById("idiomaYCookies").innerHTML = "Idioma: " + idioma + "<br>Cookies: " + cookies + "<br>OS: " + os;
}


/*
Indique protocolo usado, nombre de dominio del servidor y pathname de la página.
*/

function protocolo(){
	let protocolo = location.protocol;
	let dominio = location.hostname;
	let pathname = location.pathname;

	document.getElementById("protocolo").innerHTML = "Protocolo usado: " + protocolo + "<br>nombre de dominio : " + dominio + "<br>pathname: " + pathname;

}


/*
Crear tres páginas html, cada una de ellas con botones de adelante y atrás de modo que se vayan
visitando y almacenando en el historial para que mediante esos botones podamos acceder a ellas.
Mostrar también una opción para que se muestre la longitud del historial.
*/

function adelante(){
	history.forward();
}

function atras(){
	history.back();
}

function tamagnoHistorial(){
	let tamagno = history.length;
	document.getElementById("historial").innerHTML= "El tamaño del historial es " + tamagno;
}


/*
Mostrar el ancho y alto de pantalla así como la profundidad de color.
*/

function datosPantalla(){
	let ancho = screen.width;
	let alto = screen.height;
	let profundoColor = screen.colorDepth;

	document.getElementById("resultadoPantalla").innerHTML = "Ancho de la pantalla: " + ancho + "<br>Alto : " + alto + "<br>profundidad de Color: " + profundoColor;

}