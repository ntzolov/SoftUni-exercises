function focused() {
  const inputs = Array.from(document.querySelectorAll('input'));

  for (const input of inputs) {
    input.addEventListener('focus', addClass);
    function addClass() {
      input.parentElement.classList.add('focused');
    }

    input.addEventListener('blur', removeClass);
    function removeClass() {
      input.parentElement.classList.remove('focused');
    }
  }
}
