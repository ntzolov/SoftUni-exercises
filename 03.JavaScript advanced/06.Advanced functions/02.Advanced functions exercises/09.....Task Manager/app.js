function solve() {
  const btnAdd = document.getElementById('add');
  const openSection = document.querySelectorAll('section')[1];

  btnAdd.addEventListener('click', addItem);

  function addItem() {
    const title = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const outerDiv = openSection.querySelectorAll('div')[1];
    debugger
    if (title.value && description.value && date.value) {
      const div = document.createElement('div');
      div.classList.add('flex');
      const btnStart = document.createElement('button');
      const btnDelete = document.createElement('button');
      btnStart.classList.add('green');
      btnStart.innerText = 'Start'
      btnDelete.classList.add('red');
      btnDelete.innerText = 'Delete'
      div.appendChild(btnStart);
      div.appendChild(btnDelete);

      const h = document.createElement('h3');
      const pDesc = document.createElement('p');
      const pDate = document.createElement('p');
      h.innerText = title.value;
      pDesc.innerText = description.value;
      pDate.innerText = date.value;

      const article = document.createElement('article');
      article.appendChild(h);
      article.appendChild(pDesc);
      article.appendChild(pDate);
      article.appendChild(div);

      outerDiv.appendChild(article);
    }
  }
}
