import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const div = document.getElementById('towns');
const ul = document.createElement('ul');
const btn = document.querySelector('button');

btn.addEventListener('click', search);

const template = (town) => html`
  <li>${town}</li>
`;

render(towns.map(template), ul);
div.appendChild(ul);

function search() {
  const text = document.getElementById('searchText').value;
  const towns = Array.from(document.querySelectorAll('li'));
  const result = document.getElementById('result');

  let counter = 0;
  for (const town of towns) {
    if (town.textContent.includes(text)) {
      town.classList.add('active');
      counter++;
    } else {
      town.classList.remove('active');
    }
  }

  result.textContent = `${counter} matches found`;
}
