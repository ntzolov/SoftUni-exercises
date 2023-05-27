// Its functional but Judge return 1 failed tests...

addEvents();

function addEvents() {
  document.getElementById('loadBooks').addEventListener('click', loadBooks);
  document.querySelector('form').addEventListener('submit', addBook);
}

async function loadBooks() {
  if (document.querySelector('#editForm')) {
    document.querySelector('#editForm').remove();
    document.getElementsByTagName('form')[0].style.display = 'block';
    document.getElementsByTagName('form')[0].reset();
  } else {
    document.getElementsByTagName('form')[0].reset();
  }

  const url = 'http://localhost:3030/jsonstore/collections/books/';
  const res = await fetch(url);
  const data = await res.json();

  const tbody = document.querySelector('table tbody');
  tbody.innerHTML = '';

  for (const key in data) {
    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = data[key].author;
    const tdTitle = document.createElement('td');
    tdTitle.textContent = data[key].title;

    const tdButtons = document.createElement('td');
    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.dataset.id = key;
    btnEdit.addEventListener('click', editBook);
    tdButtons.appendChild(btnEdit);

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';
    btnDelete.dataset.id = key;
    btnDelete.addEventListener('click', deleteBook);
    tdButtons.appendChild(btnDelete);

    const tr = document.createElement('tr');
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdButtons);
    tbody.appendChild(tr);
  }
}

async function addBook(e) {
  e.preventDefault();
  const url = 'http://localhost:3030/jsonstore/collections/books/';
  const author = document.querySelector('[name="author"]');
  const title = document.querySelector('[name="title"]');

  if (author.value === '' || title.value === '') {
    return;
  }

  const dataUpload = { author: author.value, title: title.value };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataUpload),
  });

  document.getElementsByTagName('form')[0].reset();
  loadBooks();
}

async function editBook(e) {
  const formElement = document.getElementsByTagName('form')[0];
  formElement.reset();
  formElement.style.display = 'none';

  if (document.querySelector('#editForm')) {
    document.querySelector('#editForm').remove();
  }

  const form = createElement('form', { id: 'editForm' });
  form.appendChild(createElement('h3', {}, 'edit FORM'));
  form.appendChild(createElement('label', {}, 'TITLE'));
  form.appendChild(
    createElement('input', {
      type: 'text',
      name: 'title',
      placeholder: 'Title...',
    })
  );
  form.appendChild(createElement('label', {}, 'AUTHOR'));
  form.appendChild(
    createElement('input', {
      type: 'text',
      name: 'author',
      placeholder: 'Author...',
    })
  );
  form.appendChild(createElement('button', {}, 'Save'));
  document.getElementsByTagName('body')[0].appendChild(form);

  let buttons = document.querySelectorAll('button');
  // for (let button of buttons) {
  //   if (button.textContent === 'Edit') {
  //     button.disabled = true;
  //   }
  // }

  const formEl = document.getElementById('editForm');
  const author = formEl.getElementsByTagName('input')[1];
  const title = formEl.getElementsByTagName('input')[0];
  localStorage.bookId = e.target.dataset.id;
  const url = `http://localhost:3030/jsonstore/collections/books/${localStorage.bookId}`;

  const res = await fetch(url);
  const data = await res.json();

  author.value = data.author;
  title.value = data.title;

  document.querySelector('#editForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        author: author.value,
        title: title.value,
      }),
    });
    document.querySelector('#editForm').remove();
    document.querySelector('form').style.display = 'block';
    loadBooks();
  });
}

async function deleteBook(e) {
  if (document.querySelector('#editForm')) {
    document.querySelector('#editForm').remove();
    document.getElementsByTagName('form')[0].style.display = 'block';
    document.getElementsByTagName('form')[0].reset();
  } else {
    document.getElementsByTagName('form')[0].reset();
  }

  const bookId = e.target.dataset.id;
  const url = `http://localhost:3030/jsonstore/collections/books/${bookId}`;

  const res = await fetch(url, {
    method: 'DELETE',
  });

  e.target.parentElement.parentElement.remove();
}

function createElement(tag, attributes, textContent) {
  const element = document.createElement(tag);

  for (let attr in attributes) {
    element[attr] = attributes[attr];
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}
