import { register } from '../auth.js';

export function renderRegister() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  document.getElementById('home').classList.remove('active');
  document.getElementById('logout').classList.remove('active');
  document.getElementById('login').classList.remove('active');
  document.getElementById('register').classList.add('active');

  const sectionRegister = document.createElement('section');
  sectionRegister.id = 'register-view';
  sectionRegister.innerHTML = `
  <h2>Register</h2>
  <form id="register">
      <label>Email: <input type="text" name="email"></label>
      <label>Password: <input type="password" name="password"></label>
      <label>Repeat: <input type="password" name="rePass"></label>
      <p class="notification"></p>
      <button>Register</button>
  </form>
  `;

  sectionRegister.querySelector('button').addEventListener('click', register);
  main.appendChild(sectionRegister);
}
