 /*
 Abrir ventana con la página web de google
 */

 function abrirGoogle() {
    window.open("https://www.google.com");
}

 // Variables para manejar la ventana pequeña y temporizador
 let ventanaPequena = null;
 let temporizadorCuentaAtras = null;
 let tiempoRestante = 10;



 // Función para abrir la ventana pequeña
 function abrirVentanaPequena() {
     ventanaPequena = window.open("", "", "width=200,height=200,left=100,top=100,resizable");
     ventanaPequena.document.write('<div><p>Esta es una ventana pequeña.</p></div>');
 }

 // Función para cerrar la ventana pequeña
 function cerrarVentana() {
     if (ventanaPequena) {
         ventanaPequena.close();
     } else {
         alert("La ventana pequeña no está abierta.");
     }
 }

 // Función para mover la ventana pequeña
 function moverVentana() {
     if (ventanaPequena) {
         ventanaPequena.moveTo(300, 300);
     } else {
        alert("La ventana pequeña no está abierta.");
     }
 }

 // Función para iniciar la cuenta atrás
 function iniciarCuentaAtras() {
     if (temporizadorCuentaAtras === null) {
         temporizadorCuentaAtras = setInterval(function() {
             if (tiempoRestante > 0) {
                 tiempoRestante--;
                 document.getElementById("cuentaAtras").innerHTML = tiempoRestante;
             } else {
                 clearInterval(temporizadorCuentaAtras);
                 temporizadorCuentaAtras = null;
                 alert("Se acabó el tiempo");
             }
         }, 1000);
     }
 }

 // Función para parar la cuenta atrás
 function pararCuentaAtras() {
     if (temporizadorCuentaAtras !== null) {
         clearInterval(temporizadorCuentaAtras);
         temporizadorCuentaAtras = null;
     }
 }

 // Función para reiniciar la cuenta atrás
 function reiniciarCuentaAtras() {
     if (temporizadorCuentaAtras !== null) {
         clearInterval(temporizadorCuentaAtras);
     }
     tiempoRestante = 10;
     document.getElementById("cuentaAtras").innerHTML = tiempoRestante;
     temporizadorCuentaAtras = null;
 }