import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById('btnLoadTowns').addEventListener('click', loadTowns);

function loadTowns(e) {
  e.preventDefault();

  const root = document.getElementById('root');
  const towns = document.getElementById('towns').value.split(', ');

  const ul = document.createElement('ul');
  const template = (town) => html`
    <li>${town}</li>
  `;

  render(towns.map(template), ul);
  root.appendChild(ul);
}
