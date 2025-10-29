let acertijo1Completado = false;
let acertijo2Completado = false;

function verificarCompletado() {
    if (acertijo1Completado && acertijo2Completado) {
        setTimeout(() => {
            alert('¡Has completado todos los enigmas de este escenario!');
            window.location.href = './escenario2.html';
        }, 1);
    }
}


function resolverAcertijo1() {

    let acertijo1 = document.getElementById('acertijo1');
    let acertijo2 = document.getElementById('acertijo2');


    let respuesta = prompt(`El Antiguo Portal espera tu respuesta:

1. El fuego
2. El tiempo
3. El viento

Elige el número de tu respuesta (1, 2 o 3):`);


    if (respuesta === '2' || respuesta === '2.') {

        acertijo1Completado = true;


        acertijo1.style.backgroundColor = 'rgba(0, 100, 0, 0.3)';


        acertijo2.style.visibility = 'visible';
        acertijo2.style.opacity = '1';


        alert('¡Correcto! El tiempo revela sus secretos...');
        verificarCompletado();
    } else if (!respuesta || respuesta === '') {
        alert('Debes elegir una respuesta.');
    } else {
        alert('¡Has fallado! El tiempo es implacable con los errores...');
        setTimeout(() => {
            alert('Deberás comenzar tu aventura desde el inicio.');
            window.location.href = './historiapresentacion.html';
        }, 1000);
    }
}


function resolverAcertijo2() {

    if (!acertijo1Completado) {
        alert('¡Primero debes resolver el enigma del tiempo!');
        return;
    }


    let respuesta = prompt(`Los antiguos susurran las opciones:

1. Un libro
2. Un espejo
3. Un mapa

Elige el número de tu respuesta (1, 2 o 3):`);


    if (respuesta === '3' || respuesta === '3.') {
        
        acertijo2Completado = true;


        document.getElementById('acertijo2').style.backgroundColor = 'rgba(0, 100, 0, 0.3)';


        alert('¡Correcto! El mapa antiguo muestra el camino...');
        verificarCompletado();
    } else if (!respuesta || respuesta === '') {
        alert('Debes elegir una respuesta.');
    } else {
        alert('¡Has fallado! El camino se desvanece en la oscuridad...');
        setTimeout(() => {
            alert('Deberás comenzar tu aventura desde el inicio.');
            window.location.href = './historiapresentacion.html';
        }, 1000);
    }
}

window.resolverAcertijo1 = resolverAcertijo1;
window.resolverAcertijo2 = resolverAcertijo2;