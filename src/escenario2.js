
let acertijo1Completado = false;
let acertijo2Completado = false;

function verificarCompletado() {
    if (acertijo1Completado && acertijo2Completado) {
        setTimeout(() => {
            alert('¡Has completado todos los enigmas de este escenario!');
            window.location.href = './escenario3.html';
        }, 1000);
    }
}


function resolverAcertijo1() {

    let acertijo1 = document.getElementById('acertijo1');
    let acertijo2 = document.getElementById('acertijo2');


    let respuesta = prompt(`El Jardín de la Luna espera tu respuesta:

1. La luna
2. El sol
3. Las estrellas

Elige el número de tu respuesta (1, 2 o 3):`);


    if (respuesta === '1' || respuesta === '1.') {

        acertijo1Completado = true;


        acertijo1.style.backgroundColor = 'rgba(0, 100, 0, 0.3)';


        acertijo2.style.visibility = 'visible';
        acertijo2.style.opacity = '1';


        alert('¡Correcto! La luz plateada revela el siguiente enigma...');
        verificarCompletado();
    } else if (!respuesta || respuesta === '') {
        alert('Debes elegir una respuesta.');
    } else {
        alert('¡Has fallado! La luna oculta su luz...');
        setTimeout(() => {
            alert('Deberás comenzar tu aventura desde el inicio.');
            window.location.href = './historiapresentacion.html';
        }, 1000);
    }
}


function resolverAcertijo2() {

    if (!acertijo1Completado) {
        alert('¡Primero debes resolver el enigma de la luna!');
        return;
    }


    let respuesta = prompt(`Las sombras susurran las opciones:

1. Una sombra
2. Un espejo
3. El silencio

Elige el número de tu respuesta (1, 2 o 3):`);


    if (respuesta === '3' || respuesta === '3.') {

        acertijo2Completado = true;


        document.getElementById('acertijo2').style.backgroundColor = 'rgba(0, 100, 0, 0.3)';


        alert('¡Correcto! El silencio de la noche te guía hacia adelante...');
        verificarCompletado();
    } else if (!respuesta || respuesta === '') {
        alert('Debes elegir una respuesta.');
    } else {
        alert('¡Has fallado! El silencio te condena...');
        setTimeout(() => {
            alert('Deberás comenzar tu aventura desde el inicio.');
            window.location.href = './historiapresentacion.html';
        }, 1000);
    }
}

// Hacer las funciones accesibles desde el HTML
window.resolverAcertijo1 = resolverAcertijo1;
window.resolverAcertijo2 = resolverAcertijo2;