function toggle() {
  let button = document.getElementsByClassName('button')[0];
  let extraText = document.getElementById('extra');

  if (extraText.style.display !== 'block') {
    extraText.style.display = 'block';
    button.textContent = 'Less';
  } else {
    extraText.style.display = 'none';
    button.textContent = 'More';
  }
}
