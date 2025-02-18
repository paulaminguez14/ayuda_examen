//Aquí realizamos el manejo de eventos con el event.target.innerText que nos devuelve el texto del elemento que se ha pulsado

function mostrarMensaje(event){
    alert("Acabas de ver el mensaje reproducido por clicar en el párrafo: " + event.target.innerText);
}

//Según el párrafo que se coja el id te muestra el mensaje en uno u otro
document.getElementById("p1").addEventListener("click", mostrarMensaje);
document.getElementById("p2").addEventListener("click", mostrarMensaje);