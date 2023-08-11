async function solution() {
  const main = document.getElementById('main');
  
  const response = await fetch(
    'http://localhost:3030/jsonstore/advanced/articles/list'
  );
  const data = await response.json();

  data.forEach(async (obj) => {
    const response = await fetch(
      `http://localhost:3030/jsonstore/advanced/articles/details/${obj._id}`
    );
    const dataInfo = await response.json();

    const divMain = document.createElement('div');
    divMain.classList.add('accordion');

    const divHead = document.createElement('div');
    divHead.classList.add('head');

    const spanHead = document.createElement('span');
    spanHead.textContent = obj.title;

    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.id = obj._id;
    btn.textContent = 'More';

    const divExtra = document.createElement('div');
    divExtra.classList.add('extra');

    const p = document.createElement('p');
    p.textContent = dataInfo.content;

    divHead.appendChild(spanHead);
    divHead.appendChild(btn);
    divMain.appendChild(divHead);
    main.appendChild(divMain);
    divExtra.appendChild(p);
    divHead.appendChild(divExtra);

    btn.addEventListener('click', toggle);
  });

  function toggle(e) {
    if (e.target.textContent === 'More') {
      e.target.textContent = 'Less';
      e.target.parentElement.children[2].style.display = 'block';
    } else {
      e.target.textContent = 'More';
      e.target.parentElement.children[2].style.display = 'none';
    }
  }
}
