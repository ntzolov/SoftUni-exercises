import { logout } from '../auth.js';
import { addCatch, loadCatches } from './catches.js';

export function renderHome() {
  const mainElement = document.querySelector('main');
  mainElement.innerHTML = '';

  const userData = JSON.parse(localStorage.getItem('user'));
  if (userData) {
    document.getElementById('guest').style.display = 'none';
    document.getElementById('logout').style.display = 'inline';
    document.getElementById('logout').addEventListener('click', logout);
    document.querySelector('.email').innerHTML = `
    Welcome, <span>${userData.email}</span>
  `;
  } else {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('guest').style.display = 'inline';
    document.querySelector('.email').innerHTML = `
    Welcome, <span>Guest</span>
  `;
  }

  document.getElementById('home').classList.add('active');
  document.getElementById('logout').classList.remove('active');
  document.getElementById('login').classList.remove('active');
  document.getElementById('register').classList.remove('active');

  const sectionHome = document.createElement('section');
  sectionHome.id = 'home-view';
  sectionHome.innerHTML = `
  <fieldset id="main">
                <legend>Catches</legend>
                <div id="catches">
                </div>
            </fieldset>
            <aside>
                <button class="load">Load</button>
                <form id="addForm">
                    <fieldset>
                        <legend>Add Catch</legend>
                        <label>Angler</label>
                        <input type="text" name="angler" class="angler" />
                        <label>Weight</label>
                        <input type="number" name="weight" class="weight" />
                        <label>Species</label>
                        <input type="text" name="species" class="species" />
                        <label>Location</label>
                        <input type="text" name="location" class="location" />
                        <label>Bait</label>
                        <input type="text" name="bait" class="bait" />
                        <label>Capture Time</label>
                        <input type="number" name="captureTime" class="captureTime" />
                        <button disabled class="add">Add</button>
                    </fieldset>
                </form>
            </aside>
  `;

  sectionHome.querySelector('.load').addEventListener('click', loadCatches);
  mainElement.appendChild(sectionHome);

  const form = document.getElementById('addForm');
  const inputs = form.querySelectorAll('input');
  const btnAdd = form.querySelector('button');

  if (!userData) {
    inputs.forEach((input) => (input.disabled = true));
    btnAdd.disabled = true;
  } else {
    inputs.forEach((input) => (input.disabled = false));
    btnAdd.disabled = false;
    form.addEventListener('submit', addCatch)
  }
}
