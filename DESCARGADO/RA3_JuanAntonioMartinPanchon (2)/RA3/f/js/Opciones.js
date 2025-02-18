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
function registro() {
    // Seleccionar los formularios de login y registro
    const loginForm = document.querySelector('.login');
    const registroForm = document.querySelector('.registro-form');

    // Mostrar el formulario de registro y ocultar el de login
    loginForm.style.display = 'none';
    registroForm.classList.add('activo');

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
});

