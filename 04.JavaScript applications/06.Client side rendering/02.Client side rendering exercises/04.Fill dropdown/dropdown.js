import { html, render } from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

addItem();

async function addItem() {
  const dropdown = document.getElementById('menu');
  const response = await fetch(url);
  let data = await response.json();

  const template = (obj) => html`
    <option value=${obj._id}>${obj.text}</option>
  `;

  render(Object.values(data).map(template), dropdown);
}

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userText = document.getElementById('itemText').value;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: userText,
    }),
  });

  form.reset();
  addItem();
});
