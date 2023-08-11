import { html, render } from './node_modules/lit-html/lit-html.js';

window.addEventListener('onload', solve());

async function solve() {
  const tbody = document.querySelector('tbody');
  const url = 'http://localhost:3030/jsonstore/advanced/table';
  const response = await fetch(url);
  const data = await response.json();

  const template = (obj) => html`
    <tr>
      <td>${obj.firstName} ${obj.lastName}</td>
      <td>${obj.email}</td>
      <td>${obj.course}</td>
    </tr>
  `;

  render(Object.values(data).map(template), tbody);

  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const rows = tbody.querySelectorAll('tr');
    let userTextElement = document.getElementById('searchField');
    const userText = userTextElement.value.toLowerCase();

    for (const row of rows) {
      row.classList.remove('select');
    }

    for (const row of rows) {
      for (const child of row.children) {
        if (child.textContent.toLowerCase().includes(userText)) {
          row.classList.add('select');
        }
      }
    }

    userTextElement.value = '';
  }
}
