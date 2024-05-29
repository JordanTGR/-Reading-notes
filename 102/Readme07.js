// Función para obtener la edad del usuario
function getUserAge() {
    let age = prompt('Por favor, ingresa tu edad:');
    while (!isValidAge(age)) {
        alert('Por favor, ingresa una edad válida.');
        age = prompt('Por favor, ingresa tu edad:');
    }
    displayUserMessage(age);
}

// Función para validar la edad del usuario
function isValidAge(age) {
    const ageNumber = parseInt(age);
    return !isNaN(ageNumber) && ageNumber > 0 && ageNumber < 120;
}

// Función para mostrar un mensaje al usuario basado en su edad
function displayUserMessage(age) {
    let message = '';
    if (age < 18) {
        message = 'Eres joven y tienes un gran camino por delante. Aprovecha cada oportunidad para aprender.';
    } else {
        message = 'Nunca es tarde para aprender. La educación es un viaje de por vida.';
    }
    document.getElementById('userMessage').innerText = message;
}

// Función para mostrar un mensaje basado en la hora del día
function displayMessageBasedOnTime() {
    const currentHour = new Date().getHours();
    let message = '';
    if (currentHour < 12) {
        message = '¡Buenos días! Es un buen momento para estudiar y aprender algo nuevo.';
    } else if (currentHour < 18) {
        message = '¡Buenas tardes! Sigue adelante con tu aprendizaje.';
    } else {
        message = '¡Buenas noches! Nunca es tarde para estudiar un poco más.';
    }
    document.getElementById('studyAdvice').innerText = message;
}

// Ejecutar la función displayMessageBasedOnTime al cargar la página
window.onload = displayMessageBasedOnTime;

// Función para obtener la preferencia de color del usuario
function getColorPreference() {
    let color = prompt('Por favor, ingresa tu color favorito (nombre o código hexadecimal):');
    while (!isValidColor(color)) {
        alert('Por favor, ingresa un color válido.');
        color = prompt('Por favor, ingresa tu color favorito (nombre o código hexadecimal):');
    }
    setColor(color);
}

// Función para validar el color ingresado por el usuario
function isValidColor(color) {
    const option = new Option().style;
    option.color = color;
    return option.color !== '';
}

// Función para establecer el color de fondo de la sección
function setColor(color) {
    document.getElementById('colorDisplay').style.background = color;
}

// Prueba de confirm()
function confirmAction() {
    if (confirm('¿Estás seguro de que deseas realizar esta acción?')) {
        alert('Acción confirmada.');
    } else {
        alert('Acción cancelada.');
    }
}
