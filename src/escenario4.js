let acertijo1Completado = false;
let acertijo2Completado = false;

function verificarCompletado() {
    if (acertijo1Completado && acertijo2Completado) {
        setTimeout(() => {
            alert('¡Has completado todos los enigmas de este escenario!');
            window.location.href = './escenario5.html';
        }, 1000);
    }
}


// Primera prueba — La Verdad
function resolverAcertijo1() {
    let acertijo1 = document.getElementById('acertijo1');
    let acertijo2 = document.getElementById('acertijo2');

    let respuesta = prompt(`"Me temen los mentirosos,\nme buscan los sabios,\nsoy más valiosa que el oro,\npero no puedo ser comprada.\n¿Qué soy?"\n\nOpciones:\n1. El miedo\n2. La verdad\n3. El valor\n\nElige el número de tu respuesta (1, 2 o 3):`);

    if (respuesta === '2' || respuesta === '2.') {
        acertijo1Completado = true;

        acertijo1.style.backgroundColor = 'rgba(0, 100, 0, 0.3)';

        acertijo2.style.visibility = 'visible';
        acertijo2.style.opacity = '1';

        alert('¡Correcto! La verdad brilla y revela el camino...');
        verificarCompletado();
    } else if (!respuesta || respuesta === '') {
        alert('Debes elegir una respuesta.');
    } else {
        alert('¡Has fallado! La sabiduría te elude...');
        setTimeout(() => {
            alert('Deberás comenzar tu aventura desde el inicio.');
            window.location.href = './historiapresentacion.html';
        }, 1000);
    }
}


// Segunda prueba — La Memoria
function resolverAcertijo2() {
    if (!acertijo1Completado) {
        alert('¡Primero debes resolver la Primera Prueba!');
        return;
    }

    let respuesta = prompt(`"Soy un tesoro que crece al compartirse,\nun peso que no fatiga al portador,\nguardo lo que ha pasado,\npero no puedo cambiar el futuro.\n¿Qué soy?"\n\nOpciones:\n1. La memoria\n2. El destino\n3. El corazón\n\nElige el número de tu respuesta (1, 2 o 3):`);

    if (respuesta === '1' || respuesta === '1.') {
        acertijo2Completado = true;

        document.getElementById('acertijo2').style.backgroundColor = 'rgba(0, 100, 0, 0.3)';

        alert('¡Correcto! La memoria guarda y guía el alma...');
        verificarCompletado();
    } else if (!respuesta || respuesta === '') {
        alert('Debes elegir una respuesta.');
    } else {
        alert('¡Has fallado! La memoria te abandona...');
        setTimeout(() => {
            alert('Deberás comenzar tu aventura desde el inicio.');
            window.location.href = './historiapresentacion.html';
        }, 1000);
    }
}

// Hacer las funciones accesibles desde el HTML
window.resolverAcertijo1 = resolverAcertijo1;
window.resolverAcertijo2 = resolverAcertijo2;
