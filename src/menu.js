export function initializeMenu() {
  const btnNew = document.getElementById('btn-new');
  const btnExit = document.getElementById('btn-exit');

  if (btnNew) btnNew.addEventListener('click', () => {
    window.location.href = '/historiapresentacion.html';
  });

  if (btnExit) btnExit.addEventListener('click', () => {
    alert('Gracias por jugar Corazón del Dragón. Vuelve pronto.');
  });
}
