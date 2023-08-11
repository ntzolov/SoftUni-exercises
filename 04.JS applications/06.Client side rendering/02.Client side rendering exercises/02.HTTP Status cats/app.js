import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');
const ul = document.createElement('ul');

const template = (cat) => html`
  <li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap" />
    <div class="info">
      <button class="showBtn" @click=${showHideInfo}>Show status code</button>
      <div class="status" style="display: none" id=${cat.id}>
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
      </div>
    </div>
  </li>
`;

render(cats.map(template), ul);
root.appendChild(ul);

function showHideInfo(e) {
  const divMain = e.target.parentElement;
  const divShowHide = divMain.children[1];

  if (divShowHide.style.display === 'none') {
    divShowHide.style.display = 'block';
    e.target.textContent = 'Hide status code';
  } else {
    divShowHide.style.display = 'none';
    e.target.textContent = 'Show status code';
  }
}
