// Capturar el evento de enviar el formulario
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene el valor del campo "Usuario"
    const username = document.getElementById('username').value;

    // Muestra el popup de bienvenida con el nombre del usuario
    alert('Bienvenido, ' + username + '!');

    // Redirigir a la página principal después de mostrar el mensaje
    window.location.href = 'index.html';
});