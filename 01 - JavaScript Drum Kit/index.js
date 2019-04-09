const pressKey = (e) => {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!sound) return;
  const keyElement = document.querySelector(`div[data-key="${e.keyCode}"]`);
  keyElement.classList.add('playing');
  sound.currentTime = 0;
  sound.play();
}

function removeTransition (e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition) );

window.addEventListener('keydown', pressKey);
