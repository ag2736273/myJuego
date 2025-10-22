# Explicación del Código del Juego "Corazón del Dragón"

## 1. Sistema de Audio (`audioControl.js`)

### Inicialización
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    const audioControl = document.getElementById('audioControl');
```
- Espera a que la página se cargue completamente
- Obtiene referencias al elemento de audio y al botón de control

### Sistema de Persistencia
```javascript
let isMuted = localStorage.getItem('audioMuted') === 'true';
```
- Usa `localStorage` para recordar si el audio estaba muteado o no entre páginas
- El estado se mantiene aunque cambies de escenario

### Control del Volumen
```javascript
bgMusic.volume = 0.5;
```
- Establece el volumen al 50% para una experiencia agradable

### Manejo de Estados
```javascript
if (isMuted) {
    iconSoundOn.style.display = 'none';
    iconSoundOff.style.display = 'block';
} else {
    iconSoundOn.style.display = 'block';
    iconSoundOff.style.display = 'none';
}
```
- Cambia los íconos según si el audio está muteado o no
- Muestra visualmente el estado actual del audio

### Control de Interacción
```javascript
audioControl.addEventListener('click', () => {
    isMuted = !isMuted;
    localStorage.setItem('audioMuted', isMuted);
    // ... manejo del audio
});
```
- Maneja los clics en el botón de audio
- Guarda el nuevo estado en localStorage
- Reproduce o pausa el audio según corresponda

## 2. Sistema de Escenarios (`escenario1.js` como ejemplo)

### Variables de Estado
```javascript
let acertijo1Completado = false;
let acertijo2Completado = false;
```
- Controlan el progreso del jugador
- Indican qué acertijos se han completado

### Verificación de Progreso
```javascript
function verificarCompletado() {
    if (acertijo1Completado && acertijo2Completado) {
        setTimeout(() => {
            alert('¡Has completado todos los enigmas de este escenario!');
            window.location.href = './escenario2.html';
        }, 1000);
    }
}
```
- Comprueba si todos los acertijos están completados
- Avanza al siguiente escenario cuando corresponde
- Usa `setTimeout` para dar tiempo a las animaciones y mensajes

### Lógica de Acertijos
```javascript
function resolverAcertijo1() {
    let respuesta = prompt(`El Antiguo Portal espera tu respuesta:
    1. El fuego
    2. El tiempo
    3. El viento`);

    if (respuesta === '2' || respuesta === '2.') {
        acertijo1Completado = true;
        // ... efectos visuales y progreso
    } else {
        // ... manejo de error
    }
}
```
- Maneja la lógica de cada acertijo
- Verifica las respuestas del jugador
- Actualiza el estado del juego
- Proporciona retroalimentación visual

### Efectos Visuales
```javascript
acertijo1.style.backgroundColor = 'rgba(0, 100, 0, 0.3)';
acertijo2.style.visibility = 'visible';
acertijo2.style.opacity = '1';
```
- Cambia la apariencia de los elementos según el progreso
- Muestra u oculta elementos según sea necesario
- Proporciona retroalimentación visual al jugador

### Manejo de Errores
```javascript
else {
    alert('¡Has fallado! El tiempo es implacable con los errores...');
    setTimeout(() => {
        alert('Deberás comenzar tu aventura desde el inicio.');
        window.location.href = './historiapresentacion.html';
    }, 1000);
}
```
- Maneja las respuestas incorrectas
- Proporciona mensajes de error
- Puede reiniciar el juego si es necesario

## Diferencias Principales

- **audioControl.js**: 
  - Maneja la experiencia auditiva del juego
  - Persiste entre escenarios
  - Controla el estado global del audio
  - Proporciona una experiencia consistente

- **Archivos de escenario**:
  - Manejan la lógica específica de cada nivel
  - Controlan los acertijos y su progreso
  - Gestionan la navegación entre escenarios
  - Proporcionan retroalimentación específica del nivel