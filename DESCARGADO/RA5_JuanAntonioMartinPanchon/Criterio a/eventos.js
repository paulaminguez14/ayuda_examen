//Modelo de Atributo de Evento (En HTML)
/*Tenemos la función puesta en el html pero la desarrollamos
en el js */

function pulsar(){
    alert('Evento atributo onclick pero la funcion en archivo aparte');
}

//Modelo de Propiedad Evento (En javascript)
/*generadas por los usuarios o el sistema 
(como hacer clic en un botón, mover el ratón, o presionar una tecla) */

document.getElementById("p3").onclick = function(){
    alert('Evento propiedad onclick Pulsado Parrafo 3');
}

//Modelo de addEventListener (En javascript)
/* Permite asociar una función o "manejador de eventos" a un evento específico en un elemento del DOM */

document.getElementById("p4").addEventListener("click", function(){
    alert('Evento addEventListener Pulsado Parrafo 4');
})