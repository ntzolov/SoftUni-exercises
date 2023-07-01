import { html, render } from './node_modules/lit-html/lit-html.js';

const body = document.querySelector('body');

const homeTemplate = html`
  <button id="loadBooks" @click=${loadBooks}>LOAD ALL BOOKS</button>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <div id="toggle-form"></div>
`;

render(homeTemplate, body);

async function loadBooks() {
  try {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    if (response.ok !== true) {
      const error = response.json();
      throw new Error(error.message);
    }
    const data = await response.json();

    renderBooks(data);
    renderAddForm();
  } catch (error) {
    alert(error.message);
    throw new Error(error.message);
  }
}

function renderBooks(data) {
  const tbody = document.querySelector('tbody');

  const template = (obj) => html`
    <tr>
      <td>${obj.title}</td>
      <td>${obj.author}</td>
      <td>
        <button data-id=${obj.id} @click=${editBook}>Edit</button>
        <button data-id=${obj.id} @click=${deleteBook}>Delete</button>
      </td>
    </tr>
  `;

  for (let key in data) {
    data[key]['id'] = key;
  }

  render(Object.values(data).map(template), tbody);
}

async function createBook(e) {
  e.preventDefault();
  try {
    const form = document.getElementById('add-form');
    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');

    if (title === '' || author === '') {
      throw new Error('Input fields cannot be empty');
    }

    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        author,
      }),
    });

    if (response.ok !== true) {
      const error = response.json();
      throw new Error(error.message);
    }

    form.reset();
    loadBooks();
  } catch (error) {
    alert(error.message);
    throw new Error(error.message);
  }
}

async function editBook(e) {
  try {
    renderEditForm();
    const editForm = document.getElementById('edit-form');
    const id = e.target.dataset.id;
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const response = await fetch(url);

    if (response.ok !== true) {
      const error = response.json();
      throw new Error(error.message);
    }

    const data = await response.json();

    const title = data.title;
    const author = data.author;

    const formTitle = editForm.querySelector('[name="title"]');
    const formAuthor = editForm.querySelector('[name="author"]');
    formTitle.value = title;
    formAuthor.value = author;

    editForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (formAuthor.value === '' || formTitle.value === '') {
        throw new Error('Input fields cannot be empty');
      }

      const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: formAuthor.value,
          title: formTitle.value,
        }),
      });

      if (response.ok !== true) {
        const error = response.json();
        throw new Error(error.message);
      }

      editForm.reset();
      loadBooks();
    });
  } catch (error) {
    alert(error.message);
    throw new Error(error.message);
  }
}

async function deleteBook(e) {
  try {
    const id = e.target.dataset.id;
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (response.ok !== true) {
      const error = response.json();
      throw new Error(error.message);
    }

    loadBooks();
  } catch (error) {
    alert(error.message);
    throw new Error(error.message);
  }
}

function renderAddForm() {
  const toggleForm = document.getElementById('toggle-form');
  const template = html`
    <form id="add-form" @submit=${createBook}>
      <h3>Add book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Submit" />
    </form>
  `;

  render(template, toggleForm);
}

function renderEditForm() {
  const toggleForm = document.getElementById('toggle-form');
  const template = html`
    <form id="edit-form">
      <input type="hidden" name="id" />
      <h3>Edit book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Save" />
    </form>
  `;

  render(template, toggleForm);
}
