// Importar estilos
import './style.css'

// Función para manejar el clic en Nuevo Juego
function iniciarJuego() {
    console.log('Iniciando nuevo juego...');
    window.location.href = 'public/historiapresentacion.html';
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado - Inicializando botón...');
    
    const btnNew = document.getElementById('btn-new');

    if (btnNew) {
        console.log('Botón Nuevo Juego encontrado');
        btnNew.addEventListener('click', iniciarJuego);
    } else {
        console.error('No se encontró el botón Nuevo Juego');
    }

    btnExit.addEventListener('click', () => {
        // Mostrar mensaje de confirmación medieval
        const confirmar = confirm('¿Deseáis abandonar vuestra aventura, noble aventurero?');
        if (confirmar) {
            // Intentar cerrar la ventana
            window.close();
            // Si window.close() no funciona, mostrar mensaje de despedida
            document.body.innerHTML = '<div class="medieval-text text-center p-8">Gracias por jugar. Podéis cerrar esta ventana de manera segura.</div>';
        }
    });
});
