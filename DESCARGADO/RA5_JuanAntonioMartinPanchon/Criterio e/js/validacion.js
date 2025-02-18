

document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('registroFormulario').addEventListener('submit', registroFormulario);


document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.querySelector('.registro-form');
    const loginForm = document.getElementById('login-form');
    const btnRegistrar = document.getElementById('botonRegistrar');

    // Inicializar estados
    registroForm.style.display = 'none'; // Ocultar el formulario de registro
    loginForm.style.display = 'flex'; // Mostrar el formulario de login
    btnRegistrar.style.display = 'none';
});

document.getElementById('registro').addEventListener('click', registro);

function registroFormulario(){


    const checkbox = document.getElementById("aceptoTerminos");
    if (checkbox) {
        if(checkbox.checked){      
            event.preventDefault();

            // Obtener valores de los campos del formulario
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const telefono = document.getElementById('telefono').value;
            const dniCompleto = document.getElementById('dni').value;
            const email = document.getElementById('emailRegistro').value;
            const password = document.getElementById('passwordRegistro').value;
            const confirmarPassword = document.getElementById('passwordRegistroConfirmar').value;
            const fechaNacimiento = document.getElementById('nacimiento').value;
            const checkboxes = document.querySelectorAll('input[name="aficiones"]:checked');
            const tipoDomicilio = document.getElementById('domicilio').value;
            const direccion = document.getElementById('direccion').value;

            // Variable para verificar si el formulario es válido
            let esValido = true;

            console.log(direccion)
            //Validamos la direccion
            if (!validarDireccion(direccion)) {
                esValido = false;
                alert('La direccion no es válida. Debe comenzar con una letra mayúscula y un máximo de 40 carácteres.');
                document.getElementById('direccion').classList.add('rojo');
                document.getElementById('direccion').classList.remove('verde');

            }else{
                document.getElementById('direccion').classList.add('verde');
                document.getElementById('direccion').classList.remove('rojo');
            }

            // Validar nombre
            if (!validarNombre(nombre)) {
                esValido = false;
                alert('El nombre no es válido. Debe comenzar con una letra mayúscula.');
                document.getElementById('nombre').classList.add('rojo');
                document.getElementById('nombre').classList.remove('verde');
            }else{
                document.getElementById('nombre').classList.add('verde');
                document.getElementById('nombre').classList.remove('rojo');
            }

            // Validar apellido
            if (!validarNombre(apellido)) {
                esValido = false;
                alert('El apellido no es válido. Debe comenzar con una letra mayúscula y contener menos de 20 letras.');
                document.getElementById('apellido').classList.add('rojo');
                document.getElementById('apellido').classList.remove('verde');
            }else{
                document.getElementById('apellido').classList.add('verde');
                document.getElementById('apellido').classList.remove('rojo');
            }

            //llamamos a funcion validarDni que comprobará si el dni es valido
            validarDni(dniCompleto);
            
            /*Funcion valirad Dni que extraerá los 8 dígitos del dni
            lo divide entre 23 y según el resto le corresponde una letra
            esa letra debe coincidir con las letras que se le pasa como constante
            si no es una de esas el dni no es valido. Si no tiene al menos 8 letras tampoco */
            function validarDni(dniCompleto) {
                const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
                const dni = dniCompleto.slice(0, -1); // Números
                const letra_in = dniCompleto.slice(-1).toUpperCase(); // Último carácter
                if (/^\d{8}$/.test(dni) && letras[dni % 23] === letra_in) {
                    validado.innerHTML += `<p>DNI válido.</p>`;
                    document.getElementById('dni').classList.add('verde');
                    document.getElementById('dni').classList.remove('rojo');
                    return true;
                } else {
                
                    alert('El DNI no es válido. Revise el número y la letra. Formato 11111111H');
                    document.getElementById('dni').classList.add('rojo');
                    document.getElementById('dni').classList.remove('verde');
                    return  esValido = false;
                    
                }
            }

            // Validar teléfono
            if (!validarTelefono(telefono)) {
                esValido = false;
                alert('El teléfono debe tener 9 dígitos y comenzar por 6, 7, 8 o 9.');
                document.getElementById('telefono').classList.add('rojo');
                document.getElementById('telefono').classList.remove('verde');
            }else{
                document.getElementById('telefono').classList.add('verde');
                document.getElementById('telefono').classList.remove('rojo');
            }

            // Validar correo electrónico
            if (!validarEmail(email)) {
                esValido = false;
                alert('El correo electrónico no tiene un formato válido.');
                document.getElementById('emailRegistro').classList.add('rojo');
                document.getElementById('emailRegistro').classList.remove('verde');
            }else{
                document.getElementById('emailRegistro').classList.add('verde');
                document.getElementById('emailRegistro').classList.remove('rojo');
            }

            // Validar contraseña
            if (!validarPassword(password)) {
                esValido = false;
                alert('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, números y símbolos.');
                document.getElementById('passwordRegistro').classList.add('rojo');
                document.getElementById('passwordRegistro').classList.remove('verde');
            }else{
                document.getElementById('passwordRegistro').classList.add('verde');
                document.getElementById('passwordRegistro').classList.remove('rojo');
            }

            // Validar coincidencia de contraseñas
            if (password !== confirmarPassword) {
                esValido = false;
                alert('Las contraseñas no coinciden.');
                document.getElementById('passwordRegistroConfirmar').classList.add('rojo');
                document.getElementById('passwordRegistroConfirmar').classList.remove('verde');
            }else{
                document.getElementById('passwordRegistroConfirmar').classList.add('verde');
                document.getElementById('passwordRegistroConfirmar').classList.remove('rojo');
            }

            // Validar fecha de nacimiento
            if (!validarFechaNacimiento(fechaNacimiento)) {
                esValido = false;
                alert('La fecha de nacimiento debe ser anterior a hoy y posterior a 1900.');
                document.getElementById('nacimiento').classList.add('rojo');
                document.getElementById('nacimiento').classList.remove('verde');
            }else{
                document.getElementById('nacimiento').classList.add('verde');
                document.getElementById('nacimiento').classList.remove('rojo');
            }

            // Validar número mínimo de aficiones seleccionadas (al menos 2)
            const aficionesSeleccionadas = Array.from(checkboxes).filter(checkbox => checkbox.checked);
            if (aficionesSeleccionadas.length < 2) {
                esValido = false;
                alert('Debe seleccionar al menos dos aficiones.');
                document.getElementById('aficiones').classList.add('rojo');
                document.getElementById('aficiones').classList.remove('verde');
            }else{
                document.getElementById('aficiones').classList.add('verde');
                document.getElementById('aficiones').classList.remove('rojo');
            }

            // Validar tipo de domicilio
            if (!validarDomicilio(tipoDomicilio)) {
                esValido = false;
                alert('Debe seleccionar el tipo de domicilio.');
                document.getElementById('domicilio').classList.add('rojo');
                document.getElementById('domicilio').classList.remove('verde');
            }else{
                document.getElementById('domicilio').classList.add('verde');
                document.getElementById('domicilio').classList.remove('rojo');
            }

            // Si todos los campos son válidos, se muestra un mensaje y se envía el formulario
            if (esValido) {
                // Crear el mensaje con los datos
            let mensaje = 'Los campos que se van a enviar son:\n';
            mensaje += `Nombre: ${nombre}\n`;
            mensaje += `Apellido: ${apellido}\n`;
            mensaje += `Teléfono: ${telefono}\n`;
            mensaje += `DNI: ${dniCompleto}\n`;
            mensaje += `Email: ${email}\n`;
            mensaje += `Fecha de nacimiento: ${fechaNacimiento}\n`;

            const aficionesSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value).join(', ');
            mensaje += `Aficiones: ${aficionesSeleccionadas}\n`;
            mensaje += `Tipo de domicilio: ${tipoDomicilio}\n`;

            const resultado = confirm(mensaje + '\n¿Desea enviar el formulario?');
                if (resultado) {
                    event.target.submit(); // Enviar el formulario
                }else{
                    alert('Formulario no enviado.');
                }
            }
        }else{
            alert('Debe aceptar terminos y condiciones');
        }
    }

    

}




/**
 * Función para validar si el nombre es válido
 * El nombre debe empezar con una letra mayúscula
 */
function validarNombre(nombre) {
    // La expresión regular ahora permite que el nombre tenga espacios y un máximo de 20 caracteres
    const regex = /^[A-Z][a-záéíóúüñ]*(?: [A-Z][a-záéíóúüñ]*){0,9}$/;
    
    // Verifica que el nombre cumpla con el formato y que tenga un máximo de 20 caracteres
    return regex.test(nombre) && nombre.length <= 20;
}


/**
 * Función para validar el teléfono
 * El teléfono debe tener 9 dígitos y comenzar por 6, 7, 8 o 9
 */
function validarTelefono(telefono) {
    const regex = /^[6-9][0-9]{8}$/;
    return regex.test(telefono);
}

/**
 * Función para validar el formato del correo electrónico
 */
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

/**
 * Función para validar la contraseña
 * La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, números y símbolos
 */
function validarPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

/**
 * Función para validar la fecha de nacimiento
 * La fecha debe ser anterior a hoy y posterior a 1900
 */
function validarFechaNacimiento(fecha) {
    const hoy = new Date();
    const fechaNacimiento = new Date(fecha);
    return fechaNacimiento < hoy && fechaNacimiento.getFullYear() > 1900;
}

/**
 * Función para validar el tipo de domicilio
 * Se debe seleccionar un tipo de domicilio
 */
function validarDomicilio(domicilio) {
    return domicilio !== "";
}


function validarDireccion(direccion) {
    // La expresión regular ahora permite que el direccion tenga espacios y un máximo de 40 caracteres
    const regex = /^[A-Z][a-záéíóúüñ]*(?: [A-Z][a-záéíóúüñ]*){0,9}$/;
    
    // Verifica que el direccion cumpla con el formato y que tenga un máximo de 40 caracteres
    return regex.test(direccion) && direccion.length <= 20;
}
