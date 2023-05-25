addEvents();

function addEvents() {
  document.getElementById('loadBooks').addEventListener('click', loadBooks);
  document.querySelector('form').addEventListener('submit', addBook);
}

async function loadBooks() {
  const url = 'http://localhost:3030/jsonstore/collections/books/';
  const res = await fetch(url);
  const data = await res.json();

  const tbody = document.querySelector('table tbody');
  tbody.innerHTML = '';

  Object.values(data).forEach((obj) => {
    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = obj.author;
    const tdTitle = document.createElement('td');
    tdTitle.textContent = obj.title;

    const tdButtons = document.createElement('td');
    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.dataset.id = obj._id;
    btnEdit.addEventListener('click', editBook);
    tdButtons.appendChild(btnEdit);
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';
    btnDelete.dataset.id = obj._id;
    btnDelete.addEventListener('click', deleteBook);
    tdButtons.appendChild(btnDelete);

    const tr = document.createElement('tr');
    tr.appendChild(tdAuthor);
    tr.appendChild(tdTitle);
    tr.appendChild(tdButtons);
    tbody.appendChild(tr);
  });
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
  console.log(dataUpload);

  const res = await fetch(url, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(dataUpload),
  });
}

// DONT FINISHED YET !!!
async function editBook(e) {
  const author = document.querySelector('[name="author"]');
  const title = document.querySelector('[name="title"]');
  const bookId = e.target.dataset.id;
  const url = `http://localhost:3030/jsonstore/collections/books/${bookId}`;

  const res = await fetch(url);
  const data = await res.json();

  author.value = data.author;
  title.value = data.title;
}

async function deleteBook(e) {
  const bookId = e.target.dataset.id;
  const url = `http://localhost:3030/jsonstore/collections/books/${bookId}`;

  const res = await fetch(url, {
    method: 'delete',
  });

  e.target.parentElement.parentElement.remove();
}
