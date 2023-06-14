function validate() {
  const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

  document.getElementById('email').addEventListener('change', (e) => {
    const email = e.target.value;
    if (!pattern.test(email)) {
      e.target.classList.add('error');
    } else {
      e.target.classList.remove('error');
    }
  });
}
