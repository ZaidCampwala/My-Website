const rabbit = document.getElementById('rabbit');

rabbit.addEventListener('click', jump);

function jump() {
  rabbit.style.top = '0px';
  setTimeout(() => {
    rabbit.style.top = '200px';
  }, 300);
}

setInterval(checkGameOver, 10);

function checkGameOver() {
  const rabbitTop = parseInt(window.getComputedStyle(rabbit).getPropertyValue('top'));
  const windowHeight = window.innerHeight;

  if (rabbitTop + 30 >= windowHeight) {
    alert('Game over!');
    rabbit.style.top = '0px';
  }
}
