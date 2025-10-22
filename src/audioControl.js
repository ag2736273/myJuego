// Función para controlar el audio del juego
document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const audio = document.getElementById('bgMusic');
    const boton = document.getElementById('audioControl');
    
    // Si no existen los elementos, no hacer nada
    if (!audio || !boton) return;

    // Configuración inicial
    const iconoSonido = boton.querySelector('.icon-sound-on');
    const iconoMute = boton.querySelector('.icon-sound-off');
    audio.volume = 0.5;
    
    // Obtener estado guardado o iniciar sin mutear
    let estaMuteado = localStorage.getItem('audioMuted') === 'true';
    
    // Función para actualizar los íconos
    const actualizarIconos = () => {
        iconoSonido.style.display = estaMuteado ? 'none' : 'block';
        iconoMute.style.display = estaMuteado ? 'block' : 'none';
    };

    // Función para controlar el audio
    const controlarAudio = () => {
        if (estaMuteado) {
            audio.pause();
        } else {
            audio.play().catch(error => {
                console.log('No se pudo reproducir el audio:', error);
                estaMuteado = true;
            });
        }
        actualizarIconos();
        localStorage.setItem('audioMuted', estaMuteado);
    };

    // Configurar estado inicial
    actualizarIconos();
    if (!estaMuteado) {
        audio.play().catch(() => {
            estaMuteado = true;
            actualizarIconos();
        });
    }

    // Eventos
    boton.addEventListener('click', () => {
        estaMuteado = !estaMuteado;
        controlarAudio();
    });

    // Iniciar audio con la primera interacción
    const iniciarAudio = () => {
        if (!estaMuteado) {
            audio.play().catch(console.log);
        }
    };

    document.addEventListener('click', iniciarAudio, { once: true });
    document.addEventListener('keydown', iniciarAudio, { once: true });
});