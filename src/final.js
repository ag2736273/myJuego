document.addEventListener('DOMContentLoaded', () => {
    const restartButton = document.getElementById('btn-restart');
    
    restartButton.addEventListener('click', () => {
        // Redirigir al inicio del juego
        window.location.href = 'historiapresentacion.html';
    });
});