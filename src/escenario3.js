let acertijo1Completado = false;
let acertijo2Completado = false;

function verificarCompletado() {
    if (acertijo1Completado && acertijo2Completado) {
        setTimeout(() => {
            alert('¡Has completado todos los enigmas de este escenario!');
            window.location.href = './escenario4.html';
        }, 1000);
    }
}

// Función para el primer acertijo - El Fuego
function resolverAcertijo1() {
    // Obtener elementos del DOM
    let acertijo1 = document.getElementById('acertijo1');
    let acertijo2 = document.getElementById('acertijo2');
    
    // Mostrar opciones y obtener respuesta
    let respuesta = prompt(`La Cámara de los Elementos presenta tu prueba:

1. Una espada
2. Un arco
3. El fuego

Elige el número de tu respuesta (1, 2 o 3):`);
    
    // Verificar respuesta
    if (respuesta === '3' || respuesta === '3.') {
        // Marcar como completado
        acertijo1Completado = true;
        
        // Cambiar apariencia del acertijo 1
        acertijo1.style.backgroundColor = 'rgba(0, 100, 0, 0.3)';
        
        // Mostrar acertijo 2
        acertijo2.style.visibility = 'visible';
        acertijo2.style.opacity = '1';
        
        // Mensaje de éxito
        alert('¡Correcto! Las llamas danzan revelando el siguiente desafío...');
        verificarCompletado();
    } else if (!respuesta || respuesta === '') {
        alert('Debes elegir una respuesta. Los elementos esperan...');
    } else {
        alert('¡Has fallado! Las llamas se extinguen...');
        setTimeout(() => {
            alert('Deberás comenzar tu aventura desde el inicio.');
            window.location.href = './historiapresentacion.html';
        }, 1000);
    }
}

// Función para el segundo acertijo - El Agua
function resolverAcertijo2() {
    // Verificar si puede intentar el acertijo 2
    if (!acertijo1Completado) {
        alert('¡Primero debes dominar el poder del fuego!');
        return;
    }
    
    // Mostrar opciones y obtener respuesta
    let respuesta = prompt(`Los elementos susurran las opciones:

1. El aire
2. El agua
3. La tierra

Elige el número de tu respuesta (1, 2 o 3):`);
    
    // Verificar respuesta
    if (respuesta === '2' || respuesta === '2.') {
        // Marcar como completado
        acertijo2Completado = true;
        
        // Cambiar apariencia del acertijo 2
        document.getElementById('acertijo2').style.backgroundColor = 'rgba(0, 100, 0, 0.3)';
        
        // Mensaje de éxito y redirección
        alert('¡Correcto! El agua fluye, abriendo un nuevo camino...');
        verificarCompletado();
    } else if (!respuesta || respuesta === '') {
        alert('Debes elegir una respuesta. Los elementos aguardan...');
    } else {
        alert('¡Has fallado! El agua te arrastra lejos...');
        setTimeout(() => {
            alert('Deberás comenzar tu aventura desde el inicio.');
            window.location.href = './historiapresentacion.html';
        }, 1000);
    }
}

// Hacer las funciones accesibles desde el HTML
window.resolverAcertijo1 = resolverAcertijo1;
window.resolverAcertijo2 = resolverAcertijo2;
