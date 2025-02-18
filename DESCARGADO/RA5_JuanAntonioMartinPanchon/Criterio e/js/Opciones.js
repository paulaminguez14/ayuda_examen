// Obtener todos los inputs y las secciones
const inputs = document.querySelectorAll('.menu input');
const sections = document.querySelectorAll('section');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        // Ocultar todas las secciones
        sections.forEach(section => section.classList.remove('active'));
        // Mostrar la sección activa
        const activeSection = document.querySelector(`.${input.id}`);
        if (activeSection) activeSection.classList.add('active');
    });
});

// Función para el formulario de login
function login(evento) {
    evento.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        const validado = document.querySelector('.validado');
        // Limpiar los campos del formulario
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

        validado.innerHTML = `<h2>Login exitoso</h2><p>Usted es ${email}, bienvenido.</p>`;
        
        // Asegurarse de mostrar la sección de inicio y la sección validada
        const inicioSection = document.querySelector('.inicio');
        inicioSection.classList.add('active');
        validado.classList.add('active');
    }
}

// Asignar el evento 'submit' al formulario de login
document.querySelector('.login').addEventListener('submit', login);


/* Función para el formulario de registro, cuando pulse en Registrarse
quiero que aparezca el formulario de registro y oculte el de login
*/
document.getElementById("botonRegistrate").addEventListener("click", function (evento){
    evento.preventDefault();
    // Seleccionar los formularios de login y registro
    const loginForm = document.querySelector('.login');
    const registroForm = document.querySelector('.registro-form');
    const btnRegistrate = document.querySelector('.btn-registrate');
    const btnRegistrar = document.querySelector('.btn-registrar');
    const mostrarModal = document.querySelector('.mostrarModal');
    
    mostrarModal.style.display = 'block'; // Mostrar el div oculto

    // Mostrar el formulario de registro y ocultar el de login
    loginForm.style.display = 'none';
    registroForm.classList.add('activo');
    btnRegistrate.style.display = 'none';
    btnRegistrar.style.display = 'block'

   
    // Limpiar cualquier mensaje previo en la sección validado
    const validado = document.querySelector('.validado');
    validado.innerHTML = '';
    validado.classList.remove('active');
});
 
function registro(){
    evento.preventDefault();
    // Seleccionar los formularios de login y registro
    const loginForm = document.querySelector('.login');
    const registroForm = document.querySelector('.registro-form');
    const mostrarModal = document.querySelector('.mostrarModal');
    if (mostrarModal) {
        mostrarModal.style.display = 'block';
    }



    // Mostrar el formulario de registro y ocultar el de login
    loginForm.style.display = 'none';
    registroForm.classList.add('activo');
    mostrarModal.style.display = 'block';

    // Limpiar cualquier mensaje previo en la sección validado
    const validado = document.querySelector('.validado');
    validado.innerHTML = '';
    validado.classList.remove('active');
}
   


// Evento para manejar el botón de registro
document.querySelector('.registro-form button').addEventListener('click', registro);



// Inicialización: Ocultar el formulario de registro al inicio
document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.querySelector('.registro-form');
    registroForm.style.display = 'none'; // Oculta el formulario de registro al inicio

    const btnRegistrar = document.getElementById('botonRegistrar');
    btnRegistrar.style.display = 'none';
});

 // Función para abrir la ventana modal
 function openModal() {
    document.getElementById("modalOverlay").style.display = "flex";
  }

  // Función para cerrar la ventana modal
  function aceptarTerminos() {
    document.getElementById("modalOverlay").style.display = "none";
      // Marcar el checkbox automáticamente
    const checkbox = document.getElementById("aceptoTerminos");
    if (checkbox) {
        checkbox.checked = true;
    }
  }

    // Función para cerrar la ventana modal
 function rechazarTerminos() {
        document.getElementById("modalOverlay").style.display = "none";
    }

  // Deshabilitar el cierre de la modal al hacer clic fuera de ella
  document.getElementById("modalOverlay").addEventListener("click", function(event) {
    if (event.target === document.getElementById("modalOverlay")) {
      event.stopPropagation();
    }
  });

  // Vincular la función openModal al clic en el enlace
document.getElementById("terminosEnlace").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    openModal(); // Llamar a la función openModal
  });

//Cuando pulso el enlace de terminos y condiciones muestro el modal

