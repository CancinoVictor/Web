const noButton = document.getElementById('noButton');
const buttonSize = 80; // Tamaño del botón
let canMove = true; // Variable para controlar el movimiento del botón

function moveButtonRandomly() {
  const x = Math.random() * (window.innerWidth - buttonSize);
  const y = Math.random() * (window.innerHeight - buttonSize);
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
}

// Mover el botón si el cursor se acerca
document.addEventListener('mousemove', (event) => {
  if (canMove) {
    const buttonRect = noButton.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (
      mouseX > buttonRect.left &&
      mouseX < buttonRect.right &&
      mouseY > buttonRect.top &&
      mouseY < buttonRect.bottom
    ) {
      canMove = false; // Evita el movimiento por un tiempo
      moveButtonRandomly();

      setTimeout(() => {
        canMove = true; // Permite el movimiento nuevamente después de un tiempo
      }, 850); // Espera 5 segundos antes de permitir otro movimiento
    }
  }
});

// Movemos el botón inicialmente a una posición aleatoria
moveButtonRandomly();

const siButton = document.getElementById('siButton');

siButton.addEventListener('click', () => {
  window.location.href = 'yes.html';
});

noButton.addEventListener('click', () => {
  window.location.href = 'no.html';
});
