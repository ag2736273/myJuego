// Función para manejar el audio en todas las páginas
document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    const audioControl = document.getElementById('audioControl');
    
    if (bgMusic && audioControl) {
        const iconSoundOn = audioControl.querySelector('.icon-sound-on');
        const iconSoundOff = audioControl.querySelector('.icon-sound-off');
        
        // Intentar recuperar el estado del audio de localStorage
        let isMuted = localStorage.getItem('audioMuted') === 'true';
        
        // Configurar el estado inicial
        if (isMuted) {
            iconSoundOn.style.display = 'none';
            iconSoundOff.style.display = 'block';
        } else {
            iconSoundOn.style.display = 'block';
            iconSoundOff.style.display = 'none';
            // Intentar reproducir el audio
            bgMusic.play().catch(error => {
                console.log('Error al reproducir el audio:', error);
            });
        }

        // Configurar el volumen
        bgMusic.volume = 0.5;

        // Manejar el control de audio
        audioControl.addEventListener('click', () => {
            isMuted = !isMuted;
            // Guardar el estado en localStorage
            localStorage.setItem('audioMuted', isMuted);

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
                    localStorage.setItem('audioMuted', true);
                    iconSoundOn.style.display = 'none';
                    iconSoundOff.style.display = 'block';
                });
            }
        });

        // Iniciar reproducción en la primera interacción si no está muteado
        const startAudio = () => {
            if (!isMuted) {
                bgMusic.play().catch(error => {
                    console.log('Error al reproducir el audio:', error);
                });
            }
        };

        // Eventos para la primera interacción
        document.addEventListener('click', startAudio, { once: true });
        document.addEventListener('keydown', startAudio, { once: true });
    }
});