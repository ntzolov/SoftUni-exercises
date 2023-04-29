function create(words) {
  const content = document.querySelector('#content');

  words.forEach((word) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.appendChild(p)
    p.style.display = 'none';
    p.textContent = word;

    div.addEventListener('click', () => {
      p.style.display = 'block';
    });

    content.appendChild(div)
  });
}
