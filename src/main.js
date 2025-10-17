// Importar estilos
import './style.css'

// Función para manejar el clic en Nuevo Juego
function iniciarJuego() {
    console.log('Iniciando nuevo juego...');
    window.location.href = 'public/historiapresentacion.html';
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado - Inicializando componentes...');
    
    // Inicializar música de fondo
    const bgMusic = document.getElementById('bgMusic');
    const audioControl = document.getElementById('audioControl');
    
    if (bgMusic && audioControl) {
        const iconSoundOn = audioControl.querySelector('.icon-sound-on');
        const iconSoundOff = audioControl.querySelector('.icon-sound-off');
        let isMuted = false;

        bgMusic.volume = 0.5; // Volumen al 50%
        
        // Configuración inicial del ícono
        iconSoundOn.style.display = 'block';
        iconSoundOff.style.display = 'none';

        // Función para iniciar el audio
        const startAudio = () => {
            if (!isMuted) {
                bgMusic.play().catch(error => {
                    console.log('Error al reproducir el audio:', error);
                });
            }
        };

        // Iniciar audio en la primera interacción con la página
        document.addEventListener('click', startAudio, { once: true });
        document.addEventListener('keydown', startAudio, { once: true });

        // Manejar el control de audio
        audioControl.addEventListener('click', () => {
            isMuted = !isMuted;
            if (isMuted) {
                bgMusic.pause();
                iconSoundOn.style.display = 'none';
                iconSoundOff.style.display = 'block';
            } else {
                bgMusic.play().then(() => {
                    iconSoundOn.style.display = 'block';
                    iconSoundOff.style.display = 'none';
                }).catch(error => {
                    console.log('Error al reproducir el audio:', error);
                    isMuted = true;
                    iconSoundOn.style.display = 'none';
                    iconSoundOff.style.display = 'block';
                });
            }
        });
    }
    
    // Inicializar botón de nuevo juego
    const btnNew = document.getElementById('btn-new');
    if (btnNew) {
        console.log('Botón Nuevo Juego encontrado');
        btnNew.addEventListener('click', iniciarJuego);
    } else {
        console.error('No se encontró el botón Nuevo Juego');
    }

    // Inicializar botón de salir (si existe)
    const btnExit = document.getElementById('btn-exit');
    if (btnExit) {
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
    }
});
